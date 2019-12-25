import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import './DropDown.css';

export default class DropDown extends Component {

    render() {
        const { show, toggleDropDown } = this.props;

        return (
            <div>
                <button onClick={toggleDropDown}>
                    Show Info
                </button>
                {
                    show && (
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

PropTypes.defaultProps = {
    show            : false,
    toggleDropDown  : () => {}
};

PropTypes.propTypes = {
    show            : PropTypes.bool,
    toggleDropDown  : PropTypes.func
};

