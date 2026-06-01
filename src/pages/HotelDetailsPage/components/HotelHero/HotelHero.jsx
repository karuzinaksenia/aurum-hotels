import HotelImage from "../../../../components/ui/HotelImage/HotelImage";
import FavoriteButton from "../../../../components/ui/FavoriteButton/FavoriteButton";
import StarRating from "../../../../components/ui/StarRating/StarRating";
import RatingBadge from "../../../../components/ui/RatingBadge/RatingBadge";
import { ru } from "../../../../constants/ru";
import {
  Hero,
  ImageWrap,
  ImageOverlay,
  FavoriteWrap,
  Badges,
  Info,
  Title,
  Location,
  Stats,
  Price,
  Description,
} from "./HotelHero.styles";

export default function HotelHero({ hotel }) {
  const stars = hotel.stars ?? 4;
  const rating = hotel.rating ?? 4.5;

  return (
    <Hero aria-labelledby="hotel-title">
      <ImageWrap>
        <HotelImage src={hotel.image} alt={`Отель ${hotel.name}`} />
        <ImageOverlay />
        <FavoriteWrap>
          <FavoriteButton hotelId={hotel._id} large />
        </FavoriteWrap>
        <Badges>
          <StarRating stars={stars} />
          <RatingBadge rating={rating} />
        </Badges>
      </ImageWrap>
      <Info>
        <Title id="hotel-title">{hotel.name}</Title>
        <Location>
          {hotel.city}, {hotel.country}
        </Location>
        <Stats>
          <span>
            {stars}★ {ru.hotel.category}
          </span>
          <span>·</span>
          <span>
            {ru.hotels.rating}: {rating}
          </span>
        </Stats>
        <Price>
          {hotel.price.toLocaleString("ru-RU")}
          {ru.currency} {ru.hotel.perNight}
        </Price>
        <Description>{hotel.description}</Description>
      </Info>
    </Hero>
  );
}
