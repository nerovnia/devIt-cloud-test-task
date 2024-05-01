import { useState, useEffect } from 'react'

export function Input({ onNumberChange }) {
  const [number, setNumber] = useState('')

  useEffect(() => {
    //console.log(number);
  }, [number])

  function handleNumberChange(event) {
    const input = event.target.value;
    if (input === '' || (input >= 0 && input <= 100)) {
      setNumber(input);
      onNumberChange(input);
    }
    //console.log(number);
  }


  return (
    <>
      <input type="number" name="" id="" onChange={handleNumberChange} value={number} />
    </>
  )
}