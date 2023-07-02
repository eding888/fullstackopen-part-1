import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.action} >
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </>
)

const Statistics = ({ good,neutral,bad }) => {
  const total = good + neutral + bad;
  if(total == 0)
    return(
      <div>No feedback given</div>
    )

  return(
    <table>
      <tr>
        <StatisticLine text="good" value={good} />
      </tr>
      <tr>
        <StatisticLine text="neutral" value={neutral} />
      </tr>
      <tr>
        <StatisticLine text="bad" value={bad} />
      </tr>
      <tr>
        <StatisticLine text="all" value= {total}/>
      </tr>
      <tr>
        <StatisticLine text="average" value= {(good - bad) / total}/>
      </tr>
      <tr>
        <StatisticLine text="postive" value= {`${good / total}%`}/>
      </tr>
    </table>
  )
}
function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementValue = (value, setFunction) => {
    setFunction(value + 1);
  }

  return (
    <>
      <h1>give feedback</h1>
      
      <Button action= {() => incrementValue(good, setGood)} text="good"/>
      <Button action= {() => incrementValue(neutral, setNeutral)} text="neutral"/>
      <Button action= {() => incrementValue(bad, setBad)} text="bad"/>

      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>

  );
}

export default App;
