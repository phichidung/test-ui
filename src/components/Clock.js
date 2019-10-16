import React, { Component } from 'react';

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        
        return (
            <div>It is {this.state.date.toLocaleDateString()}</div>
        );
    }
}
