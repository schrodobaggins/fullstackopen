const Course = (props) => {
  return (
    <div>
      <Header courses={props.courses} />
      <Content parts={props.courses.parts} />
      <Total parts={props.courses.parts} />
    </div>
  )
}

//done
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.courses.name}
      </h1>
    </div>
  )

}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>       
  )
}  

//done
const Total = (props) => {

    const total = props.parts.reduce((prevValue, currentValue) => 
      prevValue + currentValue.exercises, 0); 

    return <p>Number of exercises {total}</p>;
  };



const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
     
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses[0]} />
      <Course courses={courses[1]} />
    </div>
  )
}

export default App