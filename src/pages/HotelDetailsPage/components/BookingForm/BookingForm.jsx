import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/ui/Input/Input";
import Button from "../../../../components/ui/Button/Button";
import { ru } from "../../../../constants/ru";
import {
  submitBooking,
  clearBookingFeedback,
} from "../../../../store/slices/bookingsSlice";
import {
  Section,
  Heading,
  Hint,
  Form,
  Success,
  Error,
  AuthPrompt,
  AuthLink,
} from "./BookingForm.styles";

const emptyForm = {
  guestName: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: "1",
};

function buildInitialForm(user) {
  return {
    ...emptyForm,
    guestName: user?.name || "",
    email: user?.email || "",
  };
}

function BookingFormFields({ hotelId, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { submitStatus, error, successMessage } = useSelector(
    (s) => s.bookings
  );
  const [form, setForm] = useState(() => buildInitialForm(user));
  const [localErrors, setLocalErrors] = useState({});

  function handleChange(e) {
    dispatch(clearBookingFeedback());
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validate() {
    const errs = {};
    if (!form.guestName.trim()) errs.guestName = ru.hotel.errName;
    if (!form.email.includes("@")) errs.email = ru.hotel.errEmail;
    if (!form.checkIn) errs.checkIn = ru.hotel.errCheckIn;
    if (!form.checkOut) errs.checkOut = ru.hotel.errCheckOut;
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      errs.checkOut = ru.hotel.errDates;
    }
    setLocalErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const result = await dispatch(
      submitBooking({
        hotelId,
        guestName: form.guestName.trim(),
        email: form.email.trim(),
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        guests: form.guests,
      })
    );

    if (submitBooking.fulfilled.match(result)) {
      setForm(buildInitialForm(user));
      setTimeout(() => navigate("/profile"), 1500);
    }
  }

  return (
    <>
      <Hint>{ru.hotel.bookHint}</Hint>
      <Form onSubmit={handleSubmit} noValidate>
        <Input
          label={ru.hotel.guestName}
          name="guestName"
          value={form.guestName}
          onChange={handleChange}
          required
          autoComplete="name"
          error={localErrors.guestName}
        />
        <Input
          label={ru.hotel.email}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
          error={localErrors.email}
        />
        <Input
          label={ru.hotel.checkIn}
          name="checkIn"
          type="date"
          value={form.checkIn}
          onChange={handleChange}
          required
          error={localErrors.checkIn}
        />
        <Input
          label={ru.hotel.checkOut}
          name="checkOut"
          type="date"
          value={form.checkOut}
          onChange={handleChange}
          required
          error={localErrors.checkOut}
        />
        <Input
          label={ru.hotel.guests}
          name="guests"
          type="number"
          min="1"
          max="10"
          value={form.guests}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={submitStatus === "loading"}>
          {submitStatus === "loading" ? ru.hotel.submitting : ru.hotel.submit}
        </Button>
      </Form>
      {successMessage && (
        <Success role="status">{successMessage}</Success>
      )}
      {error && <Error role="alert">{error}</Error>}
    </>
  );
}

export default function BookingForm({ hotelId }) {
  const user = useSelector((s) => s.auth.user);

  if (!user) {
    return (
      <Section aria-labelledby="booking-heading">
        <Heading id="booking-heading">{ru.hotel.bookTitle}</Heading>
        <AuthPrompt>
          <p>{ru.hotel.loginRequired}</p>
          <div>
            <AuthLink to="/login" state={{ from: `/hotels/${hotelId}` }}>
              {ru.auth.loginBtn}
            </AuthLink>
            <AuthLink to="/register" $ghost>
              {ru.auth.registerBtn}
            </AuthLink>
          </div>
        </AuthPrompt>
      </Section>
    );
  }

  return (
    <Section aria-labelledby="booking-heading">
      <Heading id="booking-heading">{ru.hotel.bookTitle}</Heading>
      <BookingFormFields key={user.id} hotelId={hotelId} user={user} />
    </Section>
  );
}
