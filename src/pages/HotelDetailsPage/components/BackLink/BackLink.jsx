import { ru } from "../../../../constants/ru";
import { Back } from "./BackLink.styles";

export default function BackLink() {
  return <Back to="/hotels">{ru.hotel.back}</Back>;
}
