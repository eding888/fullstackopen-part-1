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
      <Part name={props.p[0].name} number={props.p[0].exercises}/>
      <Part name={props.p[1].name} number={props.p[1].exercises}/>
      <Part name={props.p[2].name} number={props.p[2].exercises}/>
    </>
  )
}

const Number = (props) =>{
  let sum = props.p.reduce((total, current) => total+= current.exercises,0);
  return(
    <>
      <div>{sum}</div>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content p={parts}/>
      <Number p={parts}/>
    </div>
  )
}

export default App