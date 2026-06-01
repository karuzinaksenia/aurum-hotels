import HotelImage from "../../../../components/ui/HotelImage/HotelImage";
import FavoriteButton from "../../../../components/ui/FavoriteButton/FavoriteButton";
import StarRating from "../../../../components/ui/StarRating/StarRating";
import RatingBadge from "../../../../components/ui/RatingBadge/RatingBadge";
import { ru } from "../../../../constants/ru";
import {
  Card,
  ImageWrap,
  ImageOverlay,
  FavoriteWrap,
  Badges,
  StarsBadge,
  Body,
  Name,
  Meta,
  Desc,
  AmenityTags,
  Amenity,
  Footer,
  PriceBlock,
  Price,
  PerNight,
  ViewLink,
} from "./HotelCard.styles";

export default function HotelCard({ hotel }) {
  const stars = hotel.stars ?? 4;
  const rating = hotel.rating ?? 4.5;
  const topAmenities = (hotel.amenities || []).slice(0, 3);

  return (
    <Card>
      <ImageWrap>
        <HotelImage src={hotel.image} alt={hotel.name} />
        <ImageOverlay />
        <FavoriteWrap>
          <FavoriteButton hotelId={hotel._id} />
        </FavoriteWrap>
        <Badges>
          <StarsBadge>
            <StarRating stars={stars} />
          </StarsBadge>
          <RatingBadge rating={rating} />
        </Badges>
      </ImageWrap>
      <Body>
        <Name>{hotel.name}</Name>
        <Meta>
          {hotel.city} · {hotel.country} · {stars}★
        </Meta>
        <Desc>{hotel.description}</Desc>
        {topAmenities.length > 0 && (
          <AmenityTags>
            {topAmenities.map((a) => (
              <Amenity key={a}>{a}</Amenity>
            ))}
          </AmenityTags>
        )}
        <Footer>
          <PriceBlock>
            <Price>
              {hotel.price.toLocaleString("ru-RU")}
              {ru.currency}
            </Price>
            <PerNight>{ru.hotels.perNight}</PerNight>
          </PriceBlock>
          <ViewLink to={`/hotels/${hotel._id}`}>{ru.hotels.details}</ViewLink>
        </Footer>
      </Body>
    </Card>
  );
}
