import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginRequest,
  registerRequest,
  fetchMe,
} from "../../services/api";
import {
  setAuth,
  clearAuth,
  getToken,
  getStoredUser,
} from "../../services/storage";

export const hydrateAuth = createAsyncThunk("auth/hydrate", async (_, { rejectWithValue }) => {
  const token = getToken();
  if (!token) return null;

  try {
    const user = await fetchMe();
    return user;
  } catch {
    clearAuth();
    return rejectWithValue("Сессия истекла");
  }
});

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await loginRequest(payload);
      setAuth(data.token, data.user);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await registerRequest(payload);
      setAuth(data.token, data.user);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const stored = getStoredUser();
const hasToken = Boolean(getToken());

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: hasToken ? stored : null,
    status: hasToken ? "loading" : "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      clearAuth();
      state.user = null;
      state.error = null;
      state.status = "idle";
    },
    clearAuthError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrateAuth.pending, (state) => {
        state.status = "loading";
      })
      .addCase(hydrateAuth.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(hydrateAuth.rejected, (state) => {
        state.status = "idle";
        state.user = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export const selectIsAuthenticated = (state) => Boolean(state.auth.user);
export default authSlice.reducer;
