import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div><h1>{props.value}</h1></div>

const Stats = props => <tr><td>{props.text}</td> <td>{props.value}</td></tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
      <Display value="give feedback" />
      <Button handleClick={incrementGood} text="good" />
      <Button handleClick={incrementNeutral} text="neutral" />
      <Button handleClick={incrementBad} text="bad" />
      <Display value="statistics" />
      {good+neutral+bad == 0 
          ? "No feedback given"
          :
        <table>
        <tbody>
        <Stats text="good" value={good} />
        <Stats text="neutral" value={neutral} />
        <Stats text="bad" value={bad} />
        <Stats text="all" value={good+neutral+bad} />
        <Stats text="average" value={(good-bad)/(good+neutral+bad)} />
        <Stats text="positive" value={((good)/(good+neutral+bad))*100 + "%"} />
        </tbody>
        </table>
      }
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
