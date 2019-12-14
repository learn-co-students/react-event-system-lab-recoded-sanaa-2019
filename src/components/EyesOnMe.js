// Code EyesOnMe Component Here
import React, {Component} from 'react';


export default class EyesOnMe extends Component{

    focusHandle = ()=>{
      console.log('Good!')
    }
    blurHandle = ()=>{
      console.log('Hey! Eyes on me!')
    }
    
    render(){
        return(<button onFocus={focusHandle} onBlur={blurHandle}>EyesOnMe </button> )
    }
}

