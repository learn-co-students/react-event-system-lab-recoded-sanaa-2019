// Code Keypad Component Here

import React, {Component} from 'react';


export default class Keypad extends Component{

    constructor(){
        super()
    }

    
    render(){
        return(<input type="password" onKeyUp={inputMethod} /> )
    }
}

let inputMethod = ()=> {console.log('Entering password...')}