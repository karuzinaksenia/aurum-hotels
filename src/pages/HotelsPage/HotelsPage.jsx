import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/layout/Layout/Layout";
import {
  loadHotels,
  loadHotelsMeta,
  defaultFilters,
} from "../../store/slices/hotelsSlice";
import HeroSection from "./components/HeroSection/HeroSection";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import ResultsBar from "./components/ResultsBar/ResultsBar";
import HotelGrid from "./components/HotelGrid/HotelGrid";

export default function HotelsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHotelsMeta());
    dispatch(loadHotels(defaultFilters));
  }, [dispatch]);

  return (
    <Layout mainLabel="Поиск отелей">
      <HeroSection />
      <SearchBar />
      <FilterPanel />
      <ResultsBar />
      <HotelGrid />
    </Layout>
  );
}
