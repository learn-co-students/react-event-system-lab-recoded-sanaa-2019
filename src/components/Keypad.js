import React, { Component } from 'react';

class Keypad extends Component {
    triggering=()=>{
        console.log('Entering password...');
    }
    render() {
        return (
            <div>
             <input onKeyUp={this.triggering} type="password" />    
            </div>
        );
    }
}

export default Keypad;