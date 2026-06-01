import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFavorites } from "../../../store/slices/favoritesSlice";

export default function AuthEffects() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(loadFavorites());
    }
  }, [dispatch, user]);

  return null;
}
