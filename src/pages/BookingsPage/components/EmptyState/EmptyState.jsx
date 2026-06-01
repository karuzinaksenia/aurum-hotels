import { ru } from "../../../../constants/ru";
import { Wrap, Text, BrowseLink } from "./EmptyState.styles";

export default function EmptyState() {
  return (
    <Wrap>
      <Text>{ru.bookings.empty}</Text>
      <BrowseLink to="/hotels">{ru.bookings.browse}</BrowseLink>
    </Wrap>
  );
}
