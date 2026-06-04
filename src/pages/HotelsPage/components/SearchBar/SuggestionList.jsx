import { ru } from "../../../../constants/ru";
import {
  Suggestions,
  Group,
  GroupTitle,
  SuggestionButton,
} from "./SearchBar.styles";

const GROUP_ORDER = [
  { type: "country", title: ru.hotels.countriesGroup },
  { type: "city", title: ru.hotels.citiesGroup },
  { type: "hotel", title: ru.hotels.hotelsGroup },
];

export default function SuggestionList({ suggestions, onSelect, listId }) {
  if (!suggestions.length) return null;

  return (
    <Suggestions id={listId} role="listbox" aria-label={ru.hotels.search}>
      {GROUP_ORDER.map(({ type, title }) => {
        const items = suggestions.filter((s) => s.type === type);
        if (!items.length) return null;
        return (
          <Group key={type}>
            <GroupTitle>{title}</GroupTitle>
            {items.map((item) => (
              <SuggestionButton
                key={`${type}-${item.label}`}
                type="button"
                role="option"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onSelect(item)}
              >
                {item.label}
              </SuggestionButton>
            ))}
          </Group>
        );
      })}
    </Suggestions>
  );
}
