import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ru } from "../../../constants/ru";
import { logout } from "../../../store/slices/authSlice";
import Button from "../../ui/Button/Button";
import { Bar, Inner, Brand, Nav, NavLink, UserBlock, UserName } from "./Header.styles";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((s) => s.auth.user);

  function handleLogout() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <Bar>
      <Inner>
        <Brand to="/" aria-label={`${ru.brand} — главная`}>
          {ru.brand}
        </Brand>
        <Nav aria-label="Основная навигация">
          <NavLink to="/" end>
            {ru.nav.home}
          </NavLink>
          <NavLink to="/hotels">{ru.nav.hotels}</NavLink>
          {user ? (
            <NavLink to="/profile">{ru.nav.profile}</NavLink>
          ) : null}
        </Nav>
        <UserBlock>
          {user ? (
            <>
              <UserName>{user.name}</UserName>
              <Button type="button" variant="ghost" size="sm" onClick={handleLogout}>
                {ru.auth.logout}
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
              >
                {ru.auth.loginBtn}
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={() => navigate("/register")}
              >
                {ru.auth.registerBtn}
              </Button>
            </>
          )}
        </UserBlock>
      </Inner>
    </Bar>
  );
}
