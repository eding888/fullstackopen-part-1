import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.action} >
    {props.text}
  </button>
)

const Display = (props) => (
  <div>{props.text} {props.value}</div>
)

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
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
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value= {total}/>
      <Display text="average" value= {(good - bad) / total}/>
      <Display text="postive" value= {`${good / total}%`}/>
    </>

  );
}

export default App;
