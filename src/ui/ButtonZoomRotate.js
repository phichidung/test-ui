import React, { Component } from 'react';
import './ButtonZoomRotate.css';

export default class ButtonZoomRotate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            move: props.move
        }
    };

    onClick() {
        this.setState({ move: !this.state.move });
    };

    render() {
        const { move }                   = this.state;
        const { active, role, children } = this.props;

        return(
            <div>
                <button onClick={ () => this.onClick() } className={`btn btn ${role || ''} ${active ? 'active' : ''} ${move ? 'move' : ''}`}>
                    {children}
                </button>
            </div>
        );
    }
}
