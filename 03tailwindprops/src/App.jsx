import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: 'Ayush',
    age: 20
  }
  let arr = [1,2,3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Start</h1>

      <Card name='AyushSingh' Someobj={myobj}/>
      
      <Card btnText="Hit me"/>
      

    </>
  )
}

export default App
