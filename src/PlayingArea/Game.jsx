import { useGame } from "../GameContext";

const Game = () => {
  const { score, setScore } = useGame();

  return (
    <>
      <h3>Score: {score}</h3>
      <button onClick={() => setScore(0)}>Restart</button>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/hole.png"
          alt="picture of hole"
          onClick={() => setScore(score + 1)}
          style={{ cursor: "pointer" }}
        />
      </section>
    </>
  );
};

export default Game;
