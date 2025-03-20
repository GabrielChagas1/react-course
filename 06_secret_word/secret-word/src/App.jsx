import { useCallback, useEffect, useState, useRef } from "react";
import { Fireworks } from "fireworks-js";


// components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// styles
import "./App.css";

// data
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const fireworksRef = useRef(null);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    let fireworks = null;

    if (showFireworks && fireworksRef.current) {
      fireworks = new Fireworks(fireworksRef.current, {
        speed: 3,
        acceleration: 1.05,
        particles: 100,
        explosion: 6,
      });
      fireworks.start();

      setTimeout(() => {
        fireworks?.stop();
        setShowFireworks(false);
      }, 3000);
    }

    return () => fireworks?.stop();
  }, [showFireworks]);

  console.log(words);

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(category, word);

    return { category, word };
  }, [words]);

  // start the game
  const startGame = useCallback(() => {
    // clear all letters
    clearLettersStates();

    // choose a word
    const { category, word } = pickWordAndCategory();

    console.log(category, word);

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // console.log(category, word);

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // process letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    console.log(letter, normalizedLetter)

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  console.log(wrongLetters);

  // restart the game
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  // clear letters state
  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // check if guesses ended
  useEffect(() => {
    if (guesses === 0) {
      // game over and reset all states
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
  
    // Verifica se todas as letras da palavra foram adivinhadas
    const isWinner = uniqueLetters.every((letter) => guessedLetters.includes(letter));
  
    if (isWinner) {
      setScore((actualScore) => actualScore + 100);
      setShowFireworks(true); // Exibir fogos de artifício
  
      // Espera 3 segundos para mostrar os fogos antes de iniciar um novo jogo
      setTimeout(() => {
        setShowFireworks(false);
        startGame();
      }, 3000);
    }
  }, [guessedLetters, letters, startGame]);
  

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
          showFireworks={showFireworks}
          fireworksRef={fireworksRef}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;