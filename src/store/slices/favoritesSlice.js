import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchFavorites,
  addFavorite as addFavoriteApi,
  removeFavorite as removeFavoriteApi,
} from "../../services/api";
import { logout } from "./authSlice";

export const loadFavorites = createAsyncThunk(
  "favorites/load",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchFavorites();
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "favorites/toggle",
  async (hotelId, { getState, rejectWithValue }) => {
    const { favorites } = getState();
    const isFav = favorites.items.some((h) => h._id === hotelId);

    try {
      if (isFav) {
        return await removeFavoriteApi(hotelId);
      }
      return await addFavoriteApi(hotelId);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    listStatus: "idle",
    toggleStatus: "idle",
    error: null,
  },
  reducers: {
    clearFavoritesError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorites.pending, (state) => {
        state.listStatus = "loading";
        state.error = null;
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.items = action.payload;
      })
      .addCase(loadFavorites.rejected, (state, action) => {
        state.listStatus = "failed";
        state.error = action.payload;
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.toggleStatus = "loading";
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.toggleStatus = "idle";
        state.items = action.payload;
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.toggleStatus = "idle";
        state.error = action.payload;
      })
      .addCase(logout, (state) => {
        state.items = [];
        state.listStatus = "idle";
        state.error = null;
      });
  },
});

export const { clearFavoritesError } = favoritesSlice.actions;
export const selectFavoriteIds = (state) =>
  new Set(state.favorites.items.map((h) => h._id));
export const selectIsFavorite = (state, hotelId) =>
  state.favorites.items.some((h) => h._id === hotelId);
export default favoritesSlice.reducer;
