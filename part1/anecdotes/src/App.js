import { useState } from 'react'

const Anecdote = ({ text, vote }) => (
  <div>
    <p>{text}</p>
    <p>has {vote} votes</p>
  </div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const randomizeAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  // TODO: make sure to understand voting process before moving on
  const anecdoteVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }
  // TODO: make sure to understand voting process before moving on
  const mostVotes = () => vote.indexOf(Math.max(...vote))


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} vote={vote[selected]} />
      <br />
      <Button handleClick={anecdoteVote} text="vote for anecdote" />
      <Button handleClick={randomizeAnecdote} text="next anecdote" />
      <br />
      <h1> Anecdote with the most votes</h1>
      <Anecdote text={anecdotes[mostVotes()]} vote={vote[mostVotes()]} />
    </div>
  )
}

export default App