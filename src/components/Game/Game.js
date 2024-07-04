import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  function handleSubmitGuess(newGuess) {
    const nextGuess = {
      id: Math.random(),
      value: newGuess,
    }
    const nextGuesses = [...guesses, nextGuess]
    setGuesses(nextGuesses)

    if (newGuess === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  function handleRestart() {
    const newAnswer = (sample(WORDS))
    setAnswer(newAnswer)
    setGuesses([])
    setGameStatus('running')
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess.value, answer))

  return <>
    <GuessResults validatedGuesses={validatedGuesses} />
    <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
    <Keyboard validatedGuesses={validatedGuesses} />
    {gameStatus === 'won' && (
      <WonBanner guessesCount={guesses.length} handleRestart={handleRestart} />
    )}
    {gameStatus === 'lost' && (
      <LostBanner answer={answer} handleRestart={handleRestart} />
    )}
  </>;
}

export default Game;
