import React, { Component } from 'react';

class EyesOnMe extends Component {
    good=()=>{
        console.log('Good!');
    }
     eyes=()=>{
        console.log('Hey! Eyes on me!');
    }
    render() {
        return (
            <div>
                <button onFocus={this.good} onBlur={this.eyes}> BTN</button>
                 
            </div>
        );
    }
}

export default EyesOnMe;