import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/layout/Layout/Layout";
import { loadBookings } from "../../store/slices/bookingsSlice";
import PageHeader from "./components/PageHeader/PageHeader";
import BookingsList from "./components/BookingsList/BookingsList";

export default function BookingsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookings());
  }, [dispatch]);

  return (
    <Layout mainLabel="Мои брони">
      <PageHeader />
      <BookingsList />
    </Layout>
  );
}
