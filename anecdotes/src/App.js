import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'hi'
  ]
  

  
  const [selected, setSelected] = useState(0);
  const [voteCounts, setVoteCount] = useState({0: 0});
  const voteCountsChangeable = {...voteCounts};

  const generateRandom = () =>{
    return Math.floor(Math.random() * anecdotes.length);
  }
  const findLargestAsMessage = () =>{
    let greatestVal = 0;
    let greatestIndex = 0;
    for(const i in voteCounts){
      const val = voteCounts[i];
      if(val >= greatestVal){
        greatestVal = val;
        greatestIndex = i;
      } 
    }
    return (anecdotes[greatestIndex] + " has " + greatestVal + " votes");
  }
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div> {anecdotes[selected]} </div>
      <button onClick={()=>{
        let random = generateRandom();
        if(!(random in voteCounts)) voteCountsChangeable[random] = 0;
        setSelected(random);
        setVoteCount(voteCountsChangeable);
      }}>
        next anecdote
      </button>

      <button onClick={()=>{
        voteCountsChangeable[selected] += 1;
        setVoteCount(voteCountsChangeable);
      }}>
        vote
      </button>

      <div>vote count: {voteCounts[selected]}</div>

      <h1>Anecdote with the most votes</h1>
      <div>{findLargestAsMessage()}</div>
    </>
    
  )
}

export default App