import React, { Component } from 'react';

export default class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked
        }
    }

    render() {

        return (
            <label style={{ display: 'flex' }}>
                <div>
                    checkbox(image)
                </div>
                &nbsp;
                <div>
                    {this.props.label}
                </div>
            </label>
        );
    }
}
