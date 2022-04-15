const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )

}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part parts={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part parts={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>       
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
}

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.parts} {props.exercises}
      </p>
    </div>
     
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
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course}/>
//       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//     </div>
//   )
// }

export default App