import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";

function HotelDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <Header />

      <main>
        <h1>Hotel #{id}</h1>
      </main>
    </>
  );
}

export default HotelDetailsPage;