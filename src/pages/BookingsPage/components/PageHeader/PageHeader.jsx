import { ru } from "../../../../constants/ru";
import { Header, Title, Subtitle } from "./PageHeader.styles";

export default function PageHeader() {
  return (
    <Header>
      <Title>{ru.bookings.title}</Title>
      <Subtitle>{ru.bookings.subtitle}</Subtitle>
    </Header>
  );
}
