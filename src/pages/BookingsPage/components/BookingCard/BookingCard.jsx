import Button from "../../../../components/ui/Button/Button";
import { ru } from "../../../../constants/ru";
import {
  Card,
  HotelName,
  Row,
  Total,
  Actions,
} from "./BookingCard.styles";

function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BookingCard({ booking, onCancel, cancelling }) {
  return (
    <Card aria-labelledby={`booking-${booking._id}`}>
      <HotelName id={`booking-${booking._id}`}>{booking.hotelName}</HotelName>
      <Row>
        {ru.bookings.guest}: {booking.guestName}
      </Row>
      <Row>
        {ru.bookings.email}: {booking.email}
      </Row>
      <Row>
        {formatDate(booking.checkIn)} → {formatDate(booking.checkOut)} ·{" "}
        {booking.guests} гост.
      </Row>
      <Total>
        {ru.bookings.total}: {booking.totalPrice.toLocaleString("ru-RU")}
        {ru.currency}
      </Total>
      <Actions>
        <Button
          type="button"
          variant="danger"
          size="sm"
          disabled={cancelling}
          onClick={() => onCancel(booking._id)}
          aria-label={`${ru.bookings.cancel}: ${booking.hotelName}`}
        >
          {ru.bookings.cancel}
        </Button>
      </Actions>
    </Card>
  );
}
