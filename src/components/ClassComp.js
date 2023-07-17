import React, {Component} from 'react'
import './Style.css'

class ClassComp extends Component{
    render(){
        return(
            <>
            <div className='box'>
    <h2>My Class Component</h2>
    <p className='para'>This is done by External CSS</p>
    <p style={{color:'blue'}}>This is done by Inline CSS</p>
    </div>
            </>
        )
    }
}

export default ClassComp