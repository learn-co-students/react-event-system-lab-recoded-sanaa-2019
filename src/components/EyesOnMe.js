// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component{

    constructor(){
        super()
    }

    render(){
        return(<button  onFocus={focus} onBlur={blur}>Button</button>)
    }
}

let focus = () => {console.log("Good!");}
let blur = () => {console.log('Hey! Eyes on me!');}