import Navbar from "../components/Navbar";
import ClubCanvas from "../components/ClubCanvas";

const Clubs = () => {
  return (
    <div className="bg-darkPrimary overflow-y-hidden pb-5">
      <Navbar />
      <ClubCanvas />
    </div>
  );
};

export default Clubs;
