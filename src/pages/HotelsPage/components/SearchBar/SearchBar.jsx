import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../components/ui/Input/Input";
import Button from "../../../../components/ui/Button/Button";
import { setFilters, loadHotels } from "../../../../store/slices/hotelsSlice";
import { getRecentSearches } from "../../../../services/storage";
import { ru } from "../../../../constants/ru";
import { Form, RecentWrap, RecentLabel, Chip } from "./SearchBar.styles";

export default function SearchBar() {
  const dispatch = useDispatch();
  const filters = useSelector((s) => s.hotels.filters);
  const recent = getRecentSearches();

  function update(field, value) {
    dispatch(setFilters({ [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loadHotels(filters));
  }

  function applyRecent(term) {
    const next = { ...filters, q: term };
    dispatch(setFilters({ q: term }));
    dispatch(loadHotels(next));
  }

  return (
    <>
      <Form onSubmit={handleSubmit} aria-label="Поиск отелей">
        <Input
          label={ru.hotels.search}
          name="q"
          placeholder={ru.hotels.searchPlaceholder}
          value={filters.q}
          onChange={(e) => update("q", e.target.value)}
        />
        <Input
          label={ru.hotels.city}
          name="city"
          placeholder={ru.hotels.cityPlaceholder}
          value={filters.city}
          onChange={(e) => update("city", e.target.value)}
        />
        <Button type="submit">{ru.hotels.submit}</Button>
      </Form>

      {recent.length > 0 && (
        <RecentWrap>
          <RecentLabel>{ru.hotels.recent}</RecentLabel>
          {recent.map((term) => (
            <Chip key={term} type="button" onClick={() => applyRecent(term)}>
              {term}
            </Chip>
          ))}
        </RecentWrap>
      )}
    </>
  );
}
