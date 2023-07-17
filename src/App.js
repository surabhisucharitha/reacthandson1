import React, { useState } from 'react'
import FunctinalComp from './components/FunctinalComp'
import ClassComp from './components/ClassComp'
import './App.css'

const App = () => {
  const [fstate,setFstate]=useState(false)
  const [cstate,setCstate]=useState(false)
  return (
    <>
    <h1>Styling using Functional and Class Components</h1>
    <div className='S'>
    <button className='funcbutton' onClick={()=>setFstate(!fstate)}>To see Styling in Functional Component</button>
    <button className='classbutton' onClick={()=>setCstate(!cstate)}>To see Styling in Class Component</button>
    </div>
    <div className='out'>
    {fstate ? <FunctinalComp/> : " "}
    {cstate ? <ClassComp/> : " "}
    </div>
    </>
  )
}

export default App