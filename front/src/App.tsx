import { useState } from 'react';
import { Input } from './components/Input'
import { Button } from './components/Button'
import './App.css'

function App() {
  const [inputNumber, setInputNumber] = useState('');
  
  const handleNumberChange = (value: string) => {
    setInputNumber(value);
  };

  return (
    <>
      <p>Please enter a number from 0 to 100:</p>
      <Input onNumberChange={handleNumberChange}/>
      <Button inputNumber={inputNumber}/>
    </>
  )
}

export default App
