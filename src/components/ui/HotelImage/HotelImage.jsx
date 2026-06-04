import { useEffect, useState } from "react";
import { Img } from "./HotelImage.styles";

const PLACEHOLDER = "/images/placeholder-hotel.svg";

export default function HotelImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  const url = failed || !src ? PLACEHOLDER : src;

  return (
    <Img
      key={url}
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
