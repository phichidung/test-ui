import React, { Component } from 'react';
import './ButtonCustomizeWayTwo.css';

export default class ButtonCustomizeWayTwo extends Component {

    render() {
        const { active, role } = this.props;

        return(
            <div>
                <button className={`btn btn ${role || ''} ${active ? 'active' : ''}`}>
                    {this.props.children}
                </button>
            </div>
        );
    }
}
