import { useRef, useState} from "react";
import "./Game.css";
import PropTypes from "prop-types";

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  showFireworks,
  fireworksRef
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação</span>: {score}
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>

      {/* Container dos fogos de artifício */}
      {showFireworks && (
        <div
          ref={fireworksRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
  pickedWord: PropTypes.string.isRequired,
  pickedCategory: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guesses: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  showFireworks: PropTypes.bool.isRequired,
  fireworksRef: PropTypes.shape({ current: PropTypes.any })
  
};

export default Game;
