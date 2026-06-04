import { ru } from "../../../../constants/ru";
import { Header, Title } from "./PageTitle.styles";

export default function PageTitle() {
  return (
    <Header>
      <Title>{ru.hotels.title}</Title>
    </Header>
  );
}
