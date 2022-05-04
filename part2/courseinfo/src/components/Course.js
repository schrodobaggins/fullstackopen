import React from 'react'
  
  //done
const Header = ({ course }) => {
    return (
      <div>
        <h1>
          {course.name}
        </h1>
      </div>
    )
}

const Part = (props) => {
    return (
      <div>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </div>
    )
}
  
const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    );
  };
  
  
const Total = ({ course }) => {
  const total = course.parts.reduce((prevValue, currentValue) => {
  return prevValue + currentValue.exercises;
}, 0); 

  return <p>Number of exercises {total}</p>;
};


const Course = ({ course }) => {
    return (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </div>
    )
}

export default Course