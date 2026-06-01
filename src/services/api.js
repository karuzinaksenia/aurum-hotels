import axios from "axios";
import { getToken, clearAuth } from "./storage";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      clearAuth();
    }
    return Promise.reject(error);
  }
);

function cleanParams(params = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, v]) => v !== "" && v !== null && v !== undefined
    )
  );
}

export async function loginRequest(payload) {
  const { data } = await api.post("/auth/login", payload);
  return data;
}

export async function registerRequest(payload) {
  const { data } = await api.post("/auth/register", payload);
  return data;
}

export async function fetchMe() {
  const { data } = await api.get("/auth/me");
  return data;
}

export async function fetchHotelsMeta(params = {}) {
  const { data } = await api.get("/hotels/meta", { params: cleanParams(params) });
  return data;
}

export async function fetchHotels(params = {}) {
  const { data } = await api.get("/hotels", { params: cleanParams(params) });
  return data;
}

export async function fetchHotelById(id) {
  const { data } = await api.get(`/hotels/${id}`);
  return data;
}

export async function fetchBookings() {
  const { data } = await api.get("/bookings");
  return data;
}

export async function createBooking(payload) {
  const { data } = await api.post("/bookings", payload);
  return data;
}

export async function deleteBooking(id) {
  const { data } = await api.delete(`/bookings/${id}`);
  return data;
}

export async function fetchFavorites() {
  const { data } = await api.get("/favorites");
  return data;
}

export async function addFavorite(hotelId) {
  const { data } = await api.post(`/favorites/${hotelId}`);
  return data;
}

export async function removeFavorite(hotelId) {
  const { data } = await api.delete(`/favorites/${hotelId}`);
  return data;
}

export default api;
