import React, { Component } from 'react'
export default class EyesOnMe extends Component {
    handelFocus = () => {
        console.log('Good!')
    }
    handelBlur = () => {
        console.log('Hey! Eyes on me!');
    }
    render() {
        return (
            <div className='btn'>
                <button onFocus={this.handelFocus} onBlur={this.handelBlur}>Click Me!</button>
            </div>
        )
    }
}// Code EyesOnMe Component Here
