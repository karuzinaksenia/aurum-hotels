import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchHotels,
  fetchHotelById,
  fetchHotelsMeta,
} from "../../services/api";
import { addRecentSearch } from "../../services/storage";

export const defaultFilters = {
  q: "",
  country: "",
  city: "",
  minPrice: "",
  maxPrice: "",
  stars: "",
  minRating: "",
  sortBy: "rating",
  sortOrder: "desc",
};

export const loadHotelsMeta = createAsyncThunk(
  "hotels/loadHotelsMeta",
  async (params = {}, { rejectWithValue }) => {
    try {
      return await fetchHotelsMeta(params);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const loadHotels = createAsyncThunk(
  "hotels/loadHotels",
  async (params, { rejectWithValue }) => {
    try {
      if (params?.q) addRecentSearch(params.q);
      return await fetchHotels(params);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const loadHotelById = createAsyncThunk(
  "hotels/loadHotelById",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchHotelById(id);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    list: [],
    current: null,
    filters: { ...defaultFilters },
    meta: null,
    listStatus: "idle",
    detailStatus: "idle",
    listError: null,
    detailError: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters(state) {
      state.filters = { ...defaultFilters };
    },
    clearCurrent(state) {
      state.current = null;
      state.detailStatus = "idle";
      state.detailError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadHotelsMeta.fulfilled, (state, action) => {
        state.meta = action.payload;
      })
      .addCase(loadHotels.pending, (state) => {
        state.listStatus = "loading";
        state.listError = null;
      })
      .addCase(loadHotels.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.list = action.payload;
      })
      .addCase(loadHotels.rejected, (state, action) => {
        state.listStatus = "failed";
        state.listError = action.payload;
      })
      .addCase(loadHotelById.pending, (state) => {
        state.detailStatus = "loading";
        state.current = null;
        state.detailError = null;
      })
      .addCase(loadHotelById.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.current = action.payload;
      })
      .addCase(loadHotelById.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.detailError = action.payload;
      });
  },
});

export const { setFilters, resetFilters, clearCurrent } = hotelsSlice.actions;
export default hotelsSlice.reducer;
