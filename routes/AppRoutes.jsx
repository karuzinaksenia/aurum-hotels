import { Routes, Route } from "react-router-dom";

import HotelsPage from "../pages/HotelsPage/HotelsPage";
import HotelDetailsPage from "../pages/HotelDetailsPage/HotelDetailsPage";
import BookingsPage from "../pages/BookingsPage/BookingsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HotelsPage />} />
      <Route path="/hotel/:id" element={<HotelDetailsPage />} />
      <Route path="/bookings" element={<BookingsPage />} />
    </Routes>
  );
}

export default AppRoutes;