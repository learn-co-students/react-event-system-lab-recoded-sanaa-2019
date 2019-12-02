// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    triggering = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.triggering} type="password" />
            </div>
        )
    }
}
