import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ guessesCount, handleRestart }) {
  return (
    <Banner type="happy" action={handleRestart}>
      <p>
        <strong>Congratulations! </strong> Got it in
        <strong> {guessesCount > 1 ? `${guessesCount} guesses` : `${guessesCount} guess`}</strong>.
      </p>
    </Banner>
  )
}

export default WonBanner;
