import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Votacion = ({ anecdotes, indexOfMaxVotes, maxVotes }) => {  
  return (
    <div>
      <p>{anecdotes[indexOfMaxVotes]}</p>
      <p>Tiene {maxVotes} votos</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length);

  const [selected, setSelected] = useState(() => getRandomIndex());
  const [votes, setVotes] = useState(() => new Array(anecdotes.length).fill(0));
  //console.log(votes)
  const maxVotes = Math.max(...votes);
  const indexOfMaxVotes = votes.indexOf(maxVotes);
 
  const handleClickVote = () => {    
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }
  
  return (
    <>
    <div>
      {anecdotes[selected]}
      <p>Tiene {votes[selected]} votos</p>
    </div>
    
    <h1>ANECDOTAS</h1>
      <div>
        <Button handleClick={() => setSelected(getRandomIndex())} text="Siguiente Anecdota" />
        <Button handleClick={handleClickVote} text="Votar" />
      </div>
    <h2>Anecdota con mas votos</h2>
      <Votacion anecdotes={anecdotes} indexOfMaxVotes={indexOfMaxVotes} maxVotes={maxVotes}/>
    </>
  )
}

export default App