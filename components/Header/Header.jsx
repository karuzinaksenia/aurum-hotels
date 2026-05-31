import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Hotels</Link>
        <Link to="/bookings">Bookings</Link>
      </nav>
    </header>
  );
}

export default Header;