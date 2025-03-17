import './Game.css'
import PropTypes from 'prop-types';

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
  }) => {
  return (
    <div>
        <div className="game">
          <p className="points">
            <span>Pontuação: {score}</span>
          </p>
          <h1>Adivinhe a palavra:</h1>
          <h3 className="tip">
            Dica sobre a palavra: <span>{pickedCategory}</span>
          </h3>
          <p>Você ainda tem {guesses} tentativa(s).</p>
          <div className="wordContainer">
            {letters.map((letter, i) => (
                guessedLetters.includes(letter) ? (
                  <span key={i} className="letter"></span>
                ) : (
                  <span key={i} className="blankSquare"></span>
                )
              ))
            }
          </div>
          <div className="letterContainer">
            <p>Tente adivinhar uma letra da palavra:</p>
            <form>
              <input type="text" name='letter' maxLength="1" required />
              <button>Jogar!</button>
            </form>
          </div>
          <div className="wrongLettersContainer">
            <p>Letras já utilizadas:</p>
            {
              wrongLetters.map((letter, i) => (
                <span key={i}>{letter},</span>
              ))
            }
          </div>
        </div>
    </div>
  )
}

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
  pickedWord: PropTypes.string.isRequired,
  pickedCategory: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guesses: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};

export default Game