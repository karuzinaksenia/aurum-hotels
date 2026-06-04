import { useSelector } from "react-redux";
import { ru } from "../../../../constants/ru";
import { Bar, Count, Tags, Tag } from "./ResultsBar.styles";

export default function ResultsBar() {
  const { list, filters, listStatus } = useSelector((s) => s.hotels);

  if (listStatus !== "succeeded") return null;

  const activeTags = [];
  if (filters.city) activeTags.push(filters.city);
  else if (filters.country) activeTags.push(filters.country);
  else if (filters.q?.trim()) activeTags.push(`«${filters.q.trim()}»`);
  if (filters.stars) activeTags.push(`${filters.stars} ★`);
  if (filters.minRating) activeTags.push(`${ru.filters.minRating}: ${filters.minRating}+`);
  if (filters.meal) activeTags.push(`${ru.filters.meal}: ${filters.meal}`);
  if (filters.minPrice) activeTags.push(`от ${filters.minPrice} ₽`);
  if (filters.maxPrice) activeTags.push(`до ${filters.maxPrice} ₽`);

  return (
    <Bar>
      <Count>
        {ru.filters.found}: {list.length}
      </Count>
      {activeTags.length > 0 && (
        <Tags aria-label="Активные фильтры">
          {activeTags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Tags>
      )}
    </Bar>
  );
}
