import React from 'react'
import './Style.css'

const FunctinalComp = () => {
  return (
    <>
    <div className='box1'>
    <h2>My Functional Component</h2>
    <p className='para'>This is done by External CSS</p>
    <p style={{color:'blue'}}>This is done by Inline CSS</p>
    </div>
    </>
  )
}

export default FunctinalComp