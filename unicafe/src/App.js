import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.action} >
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <div>{props.text} {props.value}</div>
)

const Statistics = ({ good,neutral,bad }) => {
  const total = good + neutral + bad;
  if(total == 0)
    return(
      <div>No feedback given</div>
    )

  return(
    <>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value= {total}/>
    <StatisticLine text="average" value= {(good - bad) / total}/>
    <StatisticLine text="postive" value= {`${good / total}%`}/>
    </>
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
