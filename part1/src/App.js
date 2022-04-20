import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  const increaseByOne = () => setCounter(counter + 1)

  const resetToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
    <button onClick={increaseByOne}>
      increase by one
    </button>
    <button onClick={resetToZero}>
      reset to zero
    </button>
    </div>
  )
}

export default App