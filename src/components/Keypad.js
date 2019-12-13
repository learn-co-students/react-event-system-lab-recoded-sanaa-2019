// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {
    eventhandeler=()=>{
        console.log("Entering password...");
    }
    render() { 
        return (
            <div>
                <label htmlFor="Password">Password</label>
                <input onKeyUp={this.eventhandeler} type="password"/>
            </div>
        )
    }
}

export default Keypad
