import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Layout from "../../components/layout/Layout/Layout";
import { ru } from "../../constants/ru";
import { loadBookings } from "../../store/slices/bookingsSlice";
import { loadFavorites } from "../../store/slices/favoritesSlice";
import BookingsList from "../BookingsPage/components/BookingsList/BookingsList";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import {
  Header,
  Title,
  Subtitle,
  UserCard,
  Avatar,
  UserInfo,
  UserName,
  UserEmail,
  Stats,
  Stat,
  Tabs,
  Tab,
  Panel,
} from "./ProfilePage.styles";

function userInitial(name) {
  return (name?.trim()?.[0] || "?").toUpperCase();
}

export default function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);
  const bookingsCount = useSelector((s) => s.bookings.items.length);
  const favoritesCount = useSelector((s) => s.favorites.items.length);
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") === "favorites" ? "favorites" : "bookings";

  useEffect(() => {
    dispatch(loadBookings());
    dispatch(loadFavorites());
  }, [dispatch]);

  function setTab(next) {
    if (next === "bookings") {
      setSearchParams({});
    } else {
      setSearchParams({ tab: "favorites" });
    }
  }

  return (
    <Layout mainLabel={ru.profile.title}>
      <Header>
        <Title>{ru.profile.title}</Title>
        <Subtitle>{ru.profile.subtitle}</Subtitle>
        {user && (
          <UserCard>
            <Avatar aria-hidden="true">{userInitial(user.name)}</Avatar>
            <UserInfo>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserInfo>
            <Stats>
              <Stat>
                <strong>{bookingsCount}</strong>
                <span>{ru.profile.statsBookings}</span>
              </Stat>
              <Stat>
                <strong>{favoritesCount}</strong>
                <span>{ru.profile.statsFavorites}</span>
              </Stat>
            </Stats>
          </UserCard>
        )}
      </Header>

      <Tabs role="tablist" aria-label={ru.profile.title}>
        <Tab
          type="button"
          role="tab"
          id="tab-bookings"
          aria-selected={tab === "bookings"}
          aria-controls="panel-bookings"
          $active={tab === "bookings"}
          onClick={() => setTab("bookings")}
        >
          {ru.profile.tabBookings}
        </Tab>
        <Tab
          type="button"
          role="tab"
          id="tab-favorites"
          aria-selected={tab === "favorites"}
          aria-controls="panel-favorites"
          $active={tab === "favorites"}
          onClick={() => setTab("favorites")}
        >
          {ru.profile.tabFavorites}
        </Tab>
      </Tabs>

      {tab === "bookings" ? (
        <Panel
          role="tabpanel"
          id="panel-bookings"
          aria-labelledby="tab-bookings"
        >
          <BookingsList />
        </Panel>
      ) : (
        <Panel
          role="tabpanel"
          id="panel-favorites"
          aria-labelledby="tab-favorites"
        >
          <FavoritesList />
        </Panel>
      )}
    </Layout>
  );
}
