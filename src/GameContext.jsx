import { useState, createContext, useContext } from "react";

// 1.) create context
const GameContext = createContext();

// 2.) create a provider for that context
export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider value={{ score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};

// 3.) create a custom hook to use the context easily
export const useGame = () => useContext(GameContext);
