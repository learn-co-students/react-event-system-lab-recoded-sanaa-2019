// Code Keypad Component Here
// Code Keypad Component Here
import React, { Component } from 'react'
export default class Keypad extends Component {

    handelKeyUp = () => {
        console.log('Entering password...');
    }
    render() {
        return (
            <div className="keypad">
                <form>
                    <input type="password" id="password" onKeyUp={this.handelKeyUp} />
                </form>
            </div>

        )
    }
}