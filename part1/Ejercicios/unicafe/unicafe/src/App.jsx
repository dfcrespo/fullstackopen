import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({ text, value }) => {

  console.log(text, value)
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({ good, neutral, bad, total, promedio, positivo }) => {

  console.log(good, neutral, bad, total, promedio, positivo)

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={promedio} />
      <StatisticLine text="Positive" value={positivo + ' %'} />
    </div>    
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setPromedio] = useState(0)

  const promedio = total > 0 ? (score / total) : 0

  const positivo = total > 0 ?((good/total)*100) : 0

  const handleClickGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setPromedio(score+1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setPromedio(score+0)  
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setPromedio(score-1) 
  }

  return (
    <>
      <h1>Unicafe</h1>
      <div>        
        <Button handleClick= {() => {
          handleClickGood()
          }} text='GOOD'/>
        <Button handleClick= {() => {
          handleClickNeutral()
          }} text='NEUTRAL' />
        <Button handleClick= {() => {
          handleClickBad()
          }} text='BAD'/>
      </div>

      <div>        
        <h2>Statistics</h2>        
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          promedio={promedio} 
          positivo={positivo} 
        />
      </div>
    </>
  )
}

export default App