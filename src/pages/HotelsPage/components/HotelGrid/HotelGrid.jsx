import { useSelector } from "react-redux";
import Spinner from "../../../../components/ui/Spinner/Spinner";
import HotelCard from "../HotelCard/HotelCard";
import { ru } from "../../../../constants/ru";
import { Grid, Message, ErrorBox } from "./HotelGrid.styles";

export default function HotelGrid() {
  const { list, listStatus, listError } = useSelector((s) => s.hotels);

  if (listStatus === "loading" || listStatus === "idle") {
    return <Spinner label={ru.hotels.loading} />;
  }

  if (listStatus === "failed") {
    return <ErrorBox role="alert">{listError || ru.hotels.apiError}</ErrorBox>;
  }

  if (!list.length) {
    return <Message>{ru.hotels.empty}</Message>;
  }

  return (
    <Grid aria-label="Результаты поиска отелей">
      {list.map((hotel) => (
        <HotelCard key={hotel._id} hotel={hotel} />
      ))}
    </Grid>
  );
}
