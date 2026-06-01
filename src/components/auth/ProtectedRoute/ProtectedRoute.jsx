import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../ui/Spinner/Spinner";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { user, status } = useSelector((s) => s.auth);

  if (status === "loading") {
    return <Spinner label="Проверка входа…" />;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
