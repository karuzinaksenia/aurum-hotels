const BOOKINGS_KEY = "aurum_bookings";
const SEARCHES_KEY = "aurum_recent_searches";
const TOKEN_KEY = "aurum_token";
const USER_KEY = "aurum_user";

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAuth(token, user) {
  localStorage.setItem(TOKEN_KEY, token);
  write(USER_KEY, user);
}

export function getStoredUser() {
  return read(USER_KEY, null);
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getLocalBookings() {
  return read(BOOKINGS_KEY, []);
}

export function saveLocalBookings(bookings) {
  write(BOOKINGS_KEY, bookings);
}

export function addLocalBooking(booking) {
  const list = getLocalBookings();
  saveLocalBookings([booking, ...list]);
}

export function removeLocalBooking(id) {
  const list = getLocalBookings().filter((b) => b._id !== id && b.id !== id);
  saveLocalBookings(list);
}

export function getRecentSearches() {
  return read(SEARCHES_KEY, []);
}

export function addRecentSearch(term) {
  if (!term?.trim()) return;
  const trimmed = term.trim();
  const list = getRecentSearches().filter((s) => s !== trimmed);
  write(SEARCHES_KEY, [trimmed, ...list].slice(0, 5));
}
