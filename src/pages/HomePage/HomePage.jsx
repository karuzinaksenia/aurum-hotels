import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout/Layout";
import { loadHotels } from "../../store/slices/hotelsSlice";
import { ru } from "../../constants/ru";
import HomeHero from "./components/HomeHero/HomeHero";
import AboutSection from "./components/AboutSection/AboutSection";
import FeaturedHotels from "./components/FeaturedHotels/FeaturedHotels";

export default function HomePage() {
  const dispatch = useDispatch();
  const { list, listStatus } = useSelector((s) => s.hotels);

  useEffect(() => {
    if (listStatus === "idle") {
      dispatch(loadHotels({}));
    }
  }, [dispatch, listStatus]);

  const featured = list.slice(0, 3);

  return (
    <Layout mainLabel="Главная страница">
      <HomeHero />
      <FeaturedHotels hotels={featured} loading={listStatus === "loading"} />
      <AboutSection />
      <p style={{ textAlign: "center", marginTop: 32 }}>
        <Link to="/hotels">{ru.home.cta} →</Link>
      </p>
    </Layout>
  );
}
