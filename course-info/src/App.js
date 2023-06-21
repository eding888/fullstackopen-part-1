const Header = (props) => {
  console.log(props.length);
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) =>{
  return(
    <>
      <div>{props.name} {props.number}</div>
    </>
  )
}

const Content = (props) =>{
  return(
    <>
      <Part name={props.p1.name} number={props.p1.exercises}/>
      <Part name={props.p2.name} number={props.p2.exercises}/>
      <Part name={props.p3.name} number={props.p3.exercises}/>
    </>
  )
}

const Number = (props) =>{
  return(
    <>
      <div>{props.e1 + props.e2 + props.e3}</div>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content p1={part1} p2={part2} p3={part3}/>
      <Number e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
    </div>
  )
}

export default App