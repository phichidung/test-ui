import React, { Component } from 'react';
import './Checkbox.css';

export default class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked
        }
    };

    onClick() {
        this.setState({ checked: !this.state.checked },
        () => this.props.onChange(this.state.checked))
    };

    render() {

        return (
            <label onClick={ () => this.onClick() } style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        className={`neu checkbox ${this.state.checked ? 'checked' : ''}`}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <img style={{ height: 10, width: 10 }} src={require('../images/checkmark.svg')} alt={'checkmark'}/>
                    </div>
                </div>
                &nbsp;
                <div>
                    {this.props.label}
                </div>
            </label>
        );
    }
}
