import { useState } from 'react'

const Display = ({counter}) => (<div>{counter}</div>)

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('Renderizando Contador ' + (counter))

  const incrementarUno = () => {
    console.log('Renderizando incrementando contador ' + (counter))
    setCounter(counter + 1)
  }
  const disminuirUno = () => {
    console.log('Renderizando disminuyendo contador ' + (counter))
    setCounter(counter - 1)
  }
  const Reset0 = () => {
    console.log('Renderizando restableciendo contador ' + (counter))
    setCounter(0)
  }  

  return (
    <>
    <div>
      <div>
        < Display counter = {counter}/>
      </div>

      < Button 
      onClick= {incrementarUno}
      text = 'Más 1' />
      < Button 
      onClick= {disminuirUno}
      text = 'Menos 1' />
      < Button 
      onClick= {Reset0}
      text = 'Restablecer' />
    </div>    
    </>
  )
}

export default App