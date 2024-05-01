import { useState } from 'react'

export function Input() {
  const [number, setNumber] = useState(0)

  const handleChangeNumber = (event) => {

  }

  return (
    <>
      <input type="number" name="" id=""onChange={handleChangeNumber}/>
    </>
  )
}