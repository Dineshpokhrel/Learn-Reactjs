import { useState } from 'react'
import './App.css'

function App() {


  const [counter, setCounter ] = useState(10)
  //let counter = 10

  const addValue = () =>{
    // counter = counter + 1
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // it will just increase counter by 1 . batch banayara send garchha ani herda chai aautai kaam vako dekhera aauta matra badhauchha
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // aahile yo bunch of package haina update garna lai aahile yele previous counter liyako chha so 4 le badhchha
  }
  
  const removeValue =() =>{
    setCounter(counter -1)
  }

  return (
    <>
     <h1>learning react</h1>
     <h2>Counter value : {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <button onClick={removeValue}>remove value{counter}</button>
     <p>footer:{counter} </p>
    </>
  )
}

export default App
