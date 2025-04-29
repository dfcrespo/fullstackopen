import { useState } from 'react'

/* const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  )
} */

  /* const App = () => {
    const [value, setValue] = useState(10)
  
    const hello = (who) => {
      return () => {
        console.log('hello', who)
      }
    }
  
    return (
      <div>
        {value}
        <button onClick={hello('world')}>button</button>
        <button onClick={hello('react')}>button</button>
        <button onClick={hello('function')}>button</button>
      </div>
    )
  } */

    const App = () => {
      const [value, setValue] = useState(10)
    
      const setToValue = (newValue) => () => {
        console.log('value now', newValue)  // imprime el nuevo valor en la consola
        setValue(newValue)
      }
    
      return (
        <div>
          {value}
          <button onClick={setToValue(1000)}>thousand</button>
          <button onClick={setToValue(0)}>reset</button>
          <button onClick={setToValue(value + 1)}>increment</button>
        </div>
      )
    }

export default App