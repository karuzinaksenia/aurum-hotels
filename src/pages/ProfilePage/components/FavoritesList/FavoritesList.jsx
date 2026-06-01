import { useSelector } from "react-redux";
import HotelCard from "../../../HotelsPage/components/HotelCard/HotelCard";
import Spinner from "../../../../components/ui/Spinner/Spinner";
import { ru } from "../../../../constants/ru";
import {
  Grid,
  Empty,
  EmptyText,
  BrowseLink,
  ErrorBox,
} from "./FavoritesList.styles";

export default function FavoritesList() {
  const { items, listStatus, error } = useSelector((s) => s.favorites);

  if (listStatus === "loading" || listStatus === "idle") {
    return <Spinner label={ru.profile.favoritesLoading} />;
  }

  if (listStatus === "failed" && !items.length) {
    return <ErrorBox role="alert">{error || ru.hotels.apiError}</ErrorBox>;
  }

  if (!items.length) {
    return (
      <Empty>
        <EmptyText>{ru.profile.favoritesEmpty}</EmptyText>
        <BrowseLink to="/hotels">{ru.profile.favoritesBrowse}</BrowseLink>
      </Empty>
    );
  }

  return (
    <>
      {error && <ErrorBox role="alert">{error}</ErrorBox>}
      <Grid aria-label={ru.profile.favoritesTitle}>
        {items.map((hotel) => (
          <li key={hotel._id}>
            <HotelCard hotel={hotel} />
          </li>
        ))}
      </Grid>
    </>
  );
}
