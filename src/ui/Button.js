import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import './Button.css';

export default class Button extends Component {

    render() {
        const { children, disabled, onClick, role, responsive } = this.props;

        return (
            <button className={`itami button ${role || ''} ${responsive ? 'responsive' : ''}`}
                    onClick={onClick}
                    disabled={disabled}
            >
                { children }
            </button>
        );
    }
}

PropTypes.defaultProps = {
    className  : '',
    role       : '',
    responsive : false,
    disabled   : false, // Vô hiệu hoá = false
    onClick    : () => {}, // Sự kiện khi click vào button
    children   : <div></div>,
};

PropTypes.propTypes = {
    className  : PropTypes.string,
    role       : PropTypes.string, // default, primary, secondary, success, info, warning, danger, link
    responsive : PropTypes.bool,
    disabled   : PropTypes.bool,
    onClick    : PropTypes.func,
    children   : PropTypes.node // Anything
};
