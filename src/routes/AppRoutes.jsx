import { Routes, Route, Navigate, useParams } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import HotelsPage from "../pages/HotelsPage/HotelsPage";
import HotelDetailsPage from "../pages/HotelDetailsPage/HotelDetailsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";
import ProtectedRoute from "../components/auth/ProtectedRoute/ProtectedRoute";

function LegacyHotelRedirect() {
  const { id } = useParams();
  return <Navigate to={`/hotels/${id}`} replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotels/:id" element={<HotelDetailsPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route path="/bookings" element={<Navigate to="/profile" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/hotel/:id" element={<LegacyHotelRedirect />} />
    </Routes>
  );
}

export default AppRoutes;
