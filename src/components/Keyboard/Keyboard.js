import React from 'react';
import { KEYBOARD_ROWS } from '../../constants';

function getStatusByLetter(validatedGuesses) {
  const statusObj = {}
  const STATUS_RANK = {
    incorrect: 1,
    misplaced: 2,
    correct: 3
  }
  const allLetters = validatedGuesses.flat()
  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter]

    if (currentStatus === undefined) {
      statusObj[letter] = status
      return
    }

    const currentStatusRank = STATUS_RANK[currentStatus]
    const newStatusRank = STATUS_RANK[status]

    if (newStatusRank > currentStatusRank) {
      statusObj[letter] = status
    }
  })

  return statusObj
}

function Keyboard({ validatedGuesses }) {
  const statusObj = getStatusByLetter(validatedGuesses)

  return (
    <div className='keyboard'>
      {KEYBOARD_ROWS.map((row, index) => (
        <div key={index} className='keyboard-row'>
          {row.map((letter) => (
            <span className={`key-cell ${statusObj[letter] || ''}`} key={letter}>{letter}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard;
