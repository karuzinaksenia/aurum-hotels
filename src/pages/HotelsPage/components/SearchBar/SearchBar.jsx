import { useEffect, useId, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/ui/Button/Button";
import { ru } from "../../../../constants/ru";
import { getRecentSearches } from "../../../../services/storage";
import {
  setFilters,
  loadHotels,
  loadHotelsMeta,
} from "../../../../store/slices/hotelsSlice";
import SuggestionList from "./SuggestionList";
import {
  buildSuggestions,
  filtersFromSuggestion,
  filtersFromText,
  getSearchDisplayValue,
} from "./searchUtils";
import {
  Form,
  SearchRow,
  Combobox,
  Field,
  Label,
  TextInput,
  RecentBlock,
  RecentLabel,
  Chips,
  Chip,
} from "./SearchBar.styles";

export default function SearchBar() {
  const dispatch = useDispatch();
  const filters = useSelector((s) => s.hotels.filters);
  const meta = useSelector((s) => s.hotels.meta);
  const listId = useId();
  const comboboxRef = useRef(null);

  const [input, setInput] = useState(() => getSearchDisplayValue(filters));
  const [open, setOpen] = useState(false);
  const [recent, setRecent] = useState(() => getRecentSearches());

  const suggestions = buildSuggestions(input, meta);
  const showSuggestions = open && input.trim().length > 0 && suggestions.length > 0;

  useEffect(() => {
    setInput(getSearchDisplayValue(filters));
  }, [filters.q, filters.city, filters.country]);

  useEffect(() => {
    function handlePointerDown(e) {
      if (comboboxRef.current && !comboboxRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  function runSearch(location) {
    const next = { ...filters, ...location };
    dispatch(setFilters(location));
    dispatch(loadHotels(next));
    setRecent(getRecentSearches());
    if (location.country) {
      dispatch(loadHotelsMeta({ country: location.country }));
    } else if (!location.city) {
      dispatch(loadHotelsMeta());
    }
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    runSearch(filtersFromText(input));
  }

  function handleSelectSuggestion(suggestion) {
    setInput(suggestion.label);
    runSearch(filtersFromSuggestion(suggestion));
  }

  function handleRecentClick(term) {
    setInput(term);
    runSearch(filtersFromText(term));
  }

  return (
    <Form onSubmit={handleSubmit} aria-label="Поиск отелей">
      <SearchRow>
        <Combobox ref={comboboxRef}>
          <Field>
            <Label htmlFor="hotel-search">{ru.hotels.search}</Label>
            <TextInput
              id="hotel-search"
              name="q"
              type="search"
              autoComplete="off"
              role="combobox"
              aria-expanded={showSuggestions}
              aria-controls={showSuggestions ? listId : undefined}
              aria-autocomplete="list"
              placeholder={ru.hotels.searchPlaceholder}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
            />
          </Field>
          {showSuggestions && (
            <SuggestionList
              listId={listId}
              suggestions={suggestions}
              onSelect={handleSelectSuggestion}
            />
          )}
        </Combobox>
        <Button type="submit">{ru.hotels.submit}</Button>
      </SearchRow>

      {recent.length > 0 && (
        <RecentBlock>
          <RecentLabel>{ru.hotels.recent}</RecentLabel>
          <Chips>
            {recent.map((term) => (
              <Chip
                key={term}
                type="button"
                onClick={() => handleRecentClick(term)}
              >
                {term}
              </Chip>
            ))}
          </Chips>
        </RecentBlock>
      )}
    </Form>
  );
}
