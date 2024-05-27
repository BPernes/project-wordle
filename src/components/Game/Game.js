import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  console.log(guesses)

  function handleNewGuess(newGuess) {
    const nextGuess = {
      id: Math.random(),
      value: newGuess,
    }
    setGuesses([...guesses, nextGuess])
  }

  return <>
    <Guesses guesses={guesses} />
    <GuessInput handleNewGuess={handleNewGuess} />
  </>;
}

export default Game;
