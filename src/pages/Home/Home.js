import "../../styles/_global.scss";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import StartButton from "../../components/StartButton/StartButton";

function Home() {
  const nav = useNavigate();

  return (
    <main className="home">
      <StartButton
        label={"Play Now!"}
        onClick={() => nav("tic-tac-toe/play")}
      />
    </main>
  );
}

export default Home;
