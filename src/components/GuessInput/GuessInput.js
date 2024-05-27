import React from 'react';
import styles from './GuessInput.module.css'

function GuessInput({ handleNewGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleChange(e) {
    const capitalizedGuess = (e.target.value).toUpperCase()
    setTentativeGuess(capitalizedGuess)
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault()
        console.info({ tentativeGuess })
        handleNewGuess(tentativeGuess)
        setTentativeGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        className={styles.guess}
        pattern='\w{5}'
        minLength='5'
        maxLength='5'
        title='The input must have 5 letters'
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => { handleChange(e) }}
      />
    </form>
  )
}

export default GuessInput;
