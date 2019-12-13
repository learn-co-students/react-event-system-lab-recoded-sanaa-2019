// Code EyesOnMe Component Here
import React, { Component } from 'react'

export class EyesOnMe extends Component {
    eventHandler2=(event)=>{
        
            return console.log("Good!");
        
        
    }
    eventHandler1=(event)=>{
     
            return console.log('Hey! Eyes on me!');
        
    }
    render() {
        return (
            <div>
                <button  onBlur={this.eventHandler1}  onFocus={this.eventHandler2}>Button</button>
            </div>
        )
    }
}

export default EyesOnMe
