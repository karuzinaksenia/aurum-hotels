import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/ui/Button/Button";
import Input from "../../../../components/ui/Input/Input";
import { ru } from "../../../../constants/ru";
import {
  loadHotels,
  loadHotelsMeta,
  setFilters,
  resetFilters,
  defaultFilters,
} from "../../../../store/slices/hotelsSlice";
import {
  Panel,
  PanelTitle,
  Row,
  FilterGroup,
  GroupLabel,
  Chips,
  Chip,
  Select,
  Actions,
} from "./FilterPanel.styles";

const STAR_OPTIONS = ["", "5", "4", "3"];
const RATING_OPTIONS = [
  { value: "", label: ru.filters.anyRating },
  { value: "4.5", label: "4.5+" },
  { value: "4.0", label: "4.0+" },
  { value: "3.5", label: "3.5+" },
];
const SORT_OPTIONS = [
  { value: "rating-desc", label: ru.filters.sortRatingDesc },
  { value: "rating-asc", label: ru.filters.sortRatingAsc },
  { value: "price-asc", label: ru.filters.sortPriceAsc },
  { value: "price-desc", label: ru.filters.sortPriceDesc },
  { value: "stars-desc", label: ru.filters.sortStarsDesc },
  { value: "city-asc", label: ru.filters.sortCityAsc },
];

function buildSortValue(sortBy, sortOrder) {
  return `${sortBy || "rating"}-${sortOrder || "desc"}`;
}

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filters = useSelector((s) => s.hotels.filters);
  const meta = useSelector((s) => s.hotels.meta);

  function update(field, value) {
    dispatch(setFilters({ [field]: value }));
  }

  function apply(next = filters) {
    dispatch(loadHotels(next));
  }

  function handleReset() {
    dispatch(resetFilters());
    dispatch(loadHotelsMeta());
    dispatch(loadHotels({ ...defaultFilters }));
  }

  function setSort(combined) {
    const [sortBy, sortOrder] = combined.split("-");
    dispatch(setFilters({ sortBy, sortOrder }));
  }

  const sortValue = buildSortValue(filters.sortBy, filters.sortOrder);
  const safeSortValue = SORT_OPTIONS.some((o) => o.value === sortValue)
    ? sortValue
    : "rating-desc";

  return (
    <Panel aria-labelledby="filters-title">
      <PanelTitle id="filters-title">{ru.filters.title}</PanelTitle>

      <Row>
        <FilterGroup>
          <GroupLabel>{ru.filters.stars}</GroupLabel>
          <Chips>
            {STAR_OPTIONS.map((val) => (
              <Chip
                key={val || "any"}
                type="button"
                $active={filters.stars === val}
                onClick={() => update("stars", val)}
              >
                {val ? `${val} ★` : ru.filters.anyStars}
              </Chip>
            ))}
          </Chips>
        </FilterGroup>

        <FilterGroup>
          <GroupLabel>{ru.filters.minRating}</GroupLabel>
          <Select
            value={filters.minRating}
            onChange={(e) => update("minRating", e.target.value)}
          >
            {RATING_OPTIONS.map((opt) => (
              <option key={opt.value || "any"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </FilterGroup>

        <FilterGroup>
          <GroupLabel>{ru.filters.sort}</GroupLabel>
          <Select
            value={safeSortValue}
            onChange={(e) => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </FilterGroup>
      </Row>

      <Row>
        <FilterGroup>
          <GroupLabel>{ru.filters.meal}</GroupLabel>
          <Chips>
            <Chip
              type="button"
              $active={!filters.meal}
              onClick={() => update("meal", "")}
            >
              {ru.filters.anyMeal}
            </Chip>
            {(meta?.meals ?? []).map((plan) => (
              <Chip
                key={plan}
                type="button"
                $active={filters.meal === plan}
                onClick={() => update("meal", plan)}
              >
                {plan}
              </Chip>
            ))}
          </Chips>
        </FilterGroup>
      </Row>

      <Row>
        <Input
          label={ru.hotels.minPrice}
          name="minPrice"
          type="number"
          min="0"
          placeholder={String(meta?.minPrice ?? 0)}
          value={filters.minPrice}
          onChange={(e) => update("minPrice", e.target.value)}
        />
        <Input
          label={ru.hotels.maxPrice}
          name="maxPrice"
          type="number"
          min="0"
          placeholder={String(meta?.maxPrice ?? 15000)}
          value={filters.maxPrice}
          onChange={(e) => update("maxPrice", e.target.value)}
        />
      </Row>

      <Actions>
        <Button type="button" onClick={() => apply()}>
          {ru.filters.apply}
        </Button>
        <Button type="button" variant="ghost" onClick={handleReset}>
          {ru.filters.reset}
        </Button>
      </Actions>
    </Panel>
  );
}
