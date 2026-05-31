import { configureStore } from "@reduxjs/toolkit";

import hotelsReducer from "../redux/hotels/hotelsSlice";
import bookingsReducer from "../redux/bookings/bookingsSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    bookings: bookingsReducer,
  },
});