import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ru } from "../../../constants/ru";
import {
  toggleFavorite,
  selectIsFavorite,
} from "../../../store/slices/favoritesSlice";
import { Btn } from "./FavoriteButton.styles";

export default function FavoriteButton({ hotelId, large = false, className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((s) => s.auth.user);
  const isFavorite = useSelector((s) => selectIsFavorite(s, hotelId));
  const toggleStatus = useSelector((s) => s.favorites.toggleStatus);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    dispatch(toggleFavorite(hotelId));
  }

  const label = isFavorite ? ru.profile.removeFavorite : ru.profile.addFavorite;

  return (
    <Btn
      type="button"
      className={className}
      $large={large}
      $active={isFavorite}
      onClick={handleClick}
      disabled={toggleStatus === "loading"}
      aria-label={user ? label : ru.profile.loginForFavorite}
      aria-pressed={isFavorite}
      title={label}
    >
      {isFavorite ? "♥" : "♡"}
    </Btn>
  );
}
