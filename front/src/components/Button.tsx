import { useState, useEffect } from 'react'

export function Button({ inputNumber }) {
  const [totalRequests, setTotalRequests] = useState(1000);
  let maxRequests = 0;
  const [isLoading, setIsLoading] = useState(false);
  const timeMap: Map<number, number> = new Map();
  timeMap.set(1, Date.now());

  function handleButtonClick() {
    console.log(`inputNumber: ${inputNumber}`);
    setTimeout(() => {
      timeMap.set(2, Date.now());

      const value1 = timeMap.get(1) ?? 0;
      const value2 = timeMap.get(2) ?? 0;
      const result = value2 - value1;
      
      console.log(result);
    }, 1000)
      setIsLoading(true);
  }

  return (
    <>
      <input type="button" value="Start" disabled={isLoading} onClick={handleButtonClick} />
    </>
  )
}