import { useState, useEffect, ChangeEvent } from 'react'

export function Input() {
  const [reqnumber, setNumber] = useState(0)

  ///useEffect(() => {
  //  console.log(reqnumber);
  //}, [reqnumber])

  function handleNumberChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    if (inputValue === '') setNumber(0);
    if (/^\d*$/.test(inputValue) && parseInt(inputValue, 10) <= 100) {
      setNumber(Number.parseInt(inputValue));
    }
  }

  return (
    <>
      <input type="number" name="" id="" onChange={handleNumberChange} value={reqnumber} />
    </>
  )
}