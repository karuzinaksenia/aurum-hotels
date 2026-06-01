import HotelCard from "../../../HotelsPage/components/HotelCard/HotelCard";
import Spinner from "../../../../components/ui/Spinner/Spinner";
import { ru } from "../../../../constants/ru";
import { Section, Title, Grid } from "./FeaturedHotels.styles";

export default function FeaturedHotels({ hotels, loading }) {
  return (
    <Section aria-labelledby="popular-title">
      <Title id="popular-title">{ru.home.popularTitle}</Title>
      {loading ? (
        <Spinner label={ru.hotels.loading} />
      ) : (
        <Grid>
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </Grid>
      )}
    </Section>
  );
}
