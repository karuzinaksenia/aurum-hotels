import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelBooking } from "../../../../store/slices/bookingsSlice";
import BookingCard from "../BookingCard/BookingCard";
import EmptyState from "../EmptyState/EmptyState";
import Spinner from "../../../../components/ui/Spinner/Spinner";
import { ru } from "../../../../constants/ru";
import { List, ErrorBox } from "./BookingsList.styles";

export default function BookingsList() {
  const dispatch = useDispatch();
  const { items, listStatus, error } = useSelector((s) => s.bookings);
  const [cancellingId, setCancellingId] = useState(null);

  async function handleCancel(id) {
    if (!window.confirm(ru.bookings.cancelConfirm)) return;
    setCancellingId(id);
    await dispatch(cancelBooking(id));
    setCancellingId(null);
  }

  if (listStatus === "loading" || listStatus === "idle") {
    return <Spinner label={ru.bookings.loading} />;
  }

  if (listStatus === "failed" && !items.length) {
    return <ErrorBox role="alert">{error || ru.bookings.apiError}</ErrorBox>;
  }

  if (!items.length) {
    return <EmptyState />;
  }

  return (
    <>
      {error && <ErrorBox role="alert">{error}</ErrorBox>}
      <List aria-label={ru.bookings.listLabel}>
        {items.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={booking}
            onCancel={handleCancel}
            cancelling={cancellingId === booking._id}
          />
        ))}
      </List>
    </>
  );
}
