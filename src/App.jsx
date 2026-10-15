import Game from "./PlayingArea/Game";
import Welcome from "./WelcomeComponents/WelcomeScreen";
export default function App() {
  return (
    <>
      <h1> Whack a Mole</h1>
      <Welcome />
      <Game />
    </>
  );
}
