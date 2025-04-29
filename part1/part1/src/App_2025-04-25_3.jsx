import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

//Para depurar
/* const Button = (props) => {
  console.log(props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
} */

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
    
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    //console.log('left before', left)
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    //console.log('left after', updatedLeft)    
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    //console.log('right before', right)
    const updatedRight = right + 1
    setRight(updatedRight)
    //console.log('right after', updatedRight)
  }

  return (
    <div>
      
      < Button handleClick = {handleLeftClick} text = 'Left' />
      < Button handleClick = {handleRightClick} text = 'Right' />

      <History allClicks={allClicks} />
    </div>
  )
}

export default App