import { Wrap, Star } from "./StarRating.styles";

export default function StarRating({ stars = 0, label }) {
  const value = Math.min(5, Math.max(0, Math.round(stars)));

  return (
    <Wrap aria-label={label || `${value} из 5 звёзд`} role="img">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} $active={n <= value} aria-hidden="true">
          ★
        </Star>
      ))}
    </Wrap>
  );
}
