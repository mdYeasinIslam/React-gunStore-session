import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import AllGun from './Component/AllGun/AllGun'

function App() {
const [count,setCout] = useState(0);
const countIncrease = () =>{
  setCout(count + 1);
} 
  return (
    <div className="">
     <Navbar count={count}></Navbar>
     <AllGun countIncrease={countIncrease}></AllGun>
    </div>
  )
}

export default App
