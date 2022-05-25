import MainHeader from "../components/Layout/MainHeader";
import AvailablePlayers from "../components/Players/AvailablePlayers";
import Background from "../components/UI/Background";

const PlayersPage = (props) => {
  return (
    <Background>
      <MainHeader />
      <AvailablePlayers />
    </Background>
  );
};

export default PlayersPage;
