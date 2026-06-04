const LIMIT_PER_GROUP = 5;
const MAX_TOTAL = 12;

export function getSearchDisplayValue(filters) {
  if (filters.q) return filters.q;
  if (filters.city) return filters.city;
  if (filters.country) return filters.country;
  return "";
}

export function buildSuggestions(query, meta) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  const match = (value) => value.toLowerCase().includes(needle);

  const countries = (meta?.countries ?? [])
    .filter(match)
    .slice(0, LIMIT_PER_GROUP)
    .map((label) => ({ type: "country", label }));

  const cities = (meta?.cities ?? [])
    .filter(match)
    .slice(0, LIMIT_PER_GROUP)
    .map((label) => ({ type: "city", label }));

  const hotels = (meta?.hotelNames ?? [])
    .filter(match)
    .slice(0, LIMIT_PER_GROUP)
    .map((label) => ({ type: "hotel", label }));

  return [...countries, ...cities, ...hotels].slice(0, MAX_TOTAL);
}

export function filtersFromSuggestion(suggestion) {
  const base = { q: "", city: "", country: "" };
  if (suggestion.type === "country") {
    return { ...base, country: suggestion.label };
  }
  if (suggestion.type === "city") {
    return { ...base, city: suggestion.label };
  }
  return { ...base, q: suggestion.label };
}

export function filtersFromText(text) {
  const trimmed = text.trim();
  return { q: trimmed, city: "", country: "" };
}
