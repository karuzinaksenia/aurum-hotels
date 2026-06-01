import { ru } from "../../../constants/ru";
import { Foot, Inner } from "./Footer.styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Foot>
      <Inner>
        <p>
          © {year} {ru.brand}
        </p>
        <p>{ru.footer.tagline}</p>
      </Inner>
    </Foot>
  );
}
