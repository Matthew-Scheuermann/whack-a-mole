import Game from "./PlayingArea/Game";
import Welcome from "./WelcomeComponents/WelcomeScreen";
import { GameProvider } from "./GameContext";
export default function App() {
  return (
    <>
      <h1> Whack a Mole</h1>
      <Welcome />

      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
}
