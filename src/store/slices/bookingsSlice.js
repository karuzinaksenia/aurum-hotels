import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchBookings,
  createBooking,
  deleteBooking,
} from "../../services/api";
import {
  saveLocalBookings,
  addLocalBooking,
  removeLocalBooking,
} from "../../services/storage";

export const loadBookings = createAsyncThunk(
  "bookings/loadBookings",
  async (_, { rejectWithValue }) => {
    try {
      const remote = await fetchBookings();
      saveLocalBookings(remote);
      return remote;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const submitBooking = createAsyncThunk(
  "bookings/submitBooking",
  async (payload, { rejectWithValue }) => {
    try {
      const booking = await createBooking(payload);
      addLocalBooking(booking);
      return booking;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const cancelBooking = createAsyncThunk(
  "bookings/cancelBooking",
  async (id, { rejectWithValue }) => {
    try {
      await deleteBooking(id);
      removeLocalBooking(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    items: [],
    listStatus: "idle",
    submitStatus: "idle",
    error: null,
    successMessage: null,
  },
  reducers: {
    clearBookingFeedback(state) {
      state.error = null;
      state.successMessage = null;
    },
    clearBookings(state) {
      state.items = [];
      state.listStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBookings.pending, (state) => {
        state.listStatus = "loading";
        state.error = null;
      })
      .addCase(loadBookings.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.items = action.payload;
        state.error = null;
      })
      .addCase(loadBookings.rejected, (state, action) => {
        state.listStatus = "failed";
        state.error = action.payload;
        state.items = [];
      })
      .addCase(submitBooking.pending, (state) => {
        state.submitStatus = "loading";
        state.error = null;
        state.successMessage = null;
      })
      .addCase(submitBooking.fulfilled, (state, action) => {
        state.submitStatus = "succeeded";
        state.items = [action.payload, ...state.items];
        state.successMessage = "Бронь подтверждена! Смотрите раздел «Мои брони».";
        saveLocalBookings(state.items);
      })
      .addCase(submitBooking.rejected, (state, action) => {
        state.submitStatus = "failed";
        state.error = action.payload;
      })
      .addCase(cancelBooking.fulfilled, (state, action) => {
        state.items = state.items.filter((b) => b._id !== action.payload);
        saveLocalBookings(state.items);
      })
      .addCase(cancelBooking.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearBookingFeedback, clearBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;
