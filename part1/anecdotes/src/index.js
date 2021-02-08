import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const randomQuote = () => setSelected(Math.floor(Math.random() * Math.floor(props.anecdotes.length)))

  const [votes, setVotes] = useState(
    Array(props.anecdotes.length).fill(0)
  )
  const voteQuote = () => {
    const newVotes = { ...votes }
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  var maxKey = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);



  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={voteQuote} text="vote" />
      <Button handleClick={randomQuote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[maxKey]}</div>
      <div>has {votes[maxKey]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
