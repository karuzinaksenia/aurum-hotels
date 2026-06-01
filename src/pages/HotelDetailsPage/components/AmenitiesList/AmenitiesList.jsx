import { ru } from "../../../../constants/ru";
import { Section, Heading, List, Item } from "./AmenitiesList.styles";

export default function AmenitiesList({ amenities = [] }) {
  if (!amenities.length) return null;

  return (
    <Section aria-labelledby="amenities-heading">
      <Heading id="amenities-heading">{ru.hotel.amenities}</Heading>
      <List>
        {amenities.map((a) => (
          <Item key={a}>{a}</Item>
        ))}
      </List>
    </Section>
  );
}
