import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ru } from "../../../constants/ru";
import { Page, Main } from "./Layout.styles";

export default function Layout({ children, mainLabel }) {
  return (
    <Page>
      <a href="#main-content" className="skip-link">
        {ru.skipLink}
      </a>
      <Header />
      <Main id="main-content" aria-label={mainLabel}>
        {children}
      </Main>
      <Footer />
    </Page>
  );
}
