import { useState, useCallback, useEffect } from 'react'

// css
import './App.css'

// components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

// data
import { wordsList } from './data/words'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPicketWord] = useState("");
  const [pickedCategory, setPicketCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);


  const pickWordAndCategory = () => {
    //pick random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    return {word, category}
  }
  
  const startGame = () => {

    //pick word and pick category
    const {word, category} = pickWordAndCategory();

    //create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    //fill state
    setPicketCategory(category)
    setPicketWord(word)
    setLetters(wordLetters)

    console.log(category, word, wordLetters)

    setGameStage(stages[1].name);
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }
  
  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && 
      <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </>
  )
}

export default App
