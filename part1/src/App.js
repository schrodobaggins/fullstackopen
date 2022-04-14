const Hello = (props) => {

  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {

  const now = new Date();
  const name = 'Connie'
  const age = '21'
  return (
  <div>
    <h1>Hello world it is now {now.toString()}</h1>
    <Hello name="Michael" age={age}/>
    <Hello name={name} age="21"/>
  </div>
  )
}

export default App