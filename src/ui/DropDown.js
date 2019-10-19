import React, { Component } from 'react';
import './DropDown.css';

export default class DropDown extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.handleToggle() }>Show Info</button>
                {
                    this.state.open &&
                    (
                        <div className={'itami dropdown'}>
                            <div>Name: Itami:R-S</div>
                            <div>Job: Ranger</div>
                        </div>
                    )
                }
            </div>
        );
    }
}
