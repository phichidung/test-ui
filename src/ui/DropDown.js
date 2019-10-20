import React, { Component } from 'react';
import './DropDown.css';

export default class DropDown extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    handleToggle() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.handleToggle() }>Show Info</button>
                {
                    this.state.show &&
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
