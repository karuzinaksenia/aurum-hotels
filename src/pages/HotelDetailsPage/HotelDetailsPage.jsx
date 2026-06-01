import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout/Layout";
import Spinner from "../../components/ui/Spinner/Spinner";
import { ru } from "../../constants/ru";
import BackLink from "./components/BackLink/BackLink";
import {
  loadHotelById,
  clearCurrent,
} from "../../store/slices/hotelsSlice";
import HotelHero from "./components/HotelHero/HotelHero";
import AmenitiesList from "./components/AmenitiesList/AmenitiesList";
import BookingForm from "./components/BookingForm/BookingForm";

export default function HotelDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { current: hotel, detailStatus, detailError } = useSelector(
    (s) => s.hotels
  );

  useEffect(() => {
    if (id) dispatch(loadHotelById(id));
    return () => dispatch(clearCurrent());
  }, [dispatch, id]);

  if (detailStatus === "loading" || detailStatus === "idle") {
    return (
      <Layout mainLabel="Страница отеля">
        <Spinner label={ru.hotel.loading} />
      </Layout>
    );
  }

  if (detailStatus === "failed" || !hotel) {
    return (
      <Layout mainLabel="Страница отеля">
        <p role="alert">{detailError || ru.hotel.notFound}</p>
        <p>
          <Link to="/hotels">{ru.hotel.back}</Link>
        </p>
      </Layout>
    );
  }

  return (
    <Layout mainLabel={`${hotel.name} — бронирование`}>
      <BackLink />
      <HotelHero hotel={hotel} />
      <AmenitiesList amenities={hotel.amenities} />
      <BookingForm hotelId={hotel._id} />
    </Layout>
  );
}
