import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5;
  //variable is use state and 2 parameters are current state and the new state.
  let [counter,setCounter] = useState(15);// 15 is the current state.


  const addValue = () => {
    counter = counter+1
    if(counter<=20){
    setCounter(counter);
    }
    else{
      counter = 20;
    }
    // console.log(counter);
  }

  const removeVlaue = () => {
    counter = counter-1;
    if(counter>=0){
      setCounter(counter);
    }
    else{
      counter = 0;
    }
    // console.log(counter);
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value {counter}</h2>
     <button 
     onClick={addValue}>Add Value</button> <br />
     <br />
     <button
     onClick={removeVlaue}>Remove Value</button>
    </>
  )
}

export default App
