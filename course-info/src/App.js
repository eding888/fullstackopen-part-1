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
      <Part name={props.content1[0]} number={props.content1[1]}/>
      <Part name={props.content2[0]} number={props.content2[1]}/>
      <Part name={props.content3[0]} number={props.content3[1]}/>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content1 = [part1, exercises1]
  const content2 = [part2, exercises2]
  const content3 = [part3, exercises3]

  return (
    <div>
      <Header course={course}/>
      <Content content1={content1} content2={content2} content3={content3}/>
      <Number e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

export default App