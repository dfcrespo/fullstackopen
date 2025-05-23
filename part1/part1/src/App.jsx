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

    const Display = (props) => {    
      return (
        <div>
          {props.value}
        </div>
      )
    }

    const Button = (props) => (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )

    const App = () => {
      const [value, setValue] = useState(10)
    
      const setToValue = (newValue) => {
        console.log('value now', newValue)  // imprime el nuevo valor en la consola
        setValue(newValue)
      }


    
      return (
        <div>
          < Display value = {value}/>
          <Button handleClick={() => setToValue(1000)} text='Miles'/>
          <Button handleClick={() => setToValue(0)} text='Restablecer'/>
          <Button handleClick={() => setToValue(value + 1)} text='Sumar 1'/>
        </div>
      )
    }

export default App