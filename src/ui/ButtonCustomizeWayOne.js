import React, { Component } from 'react';

export default class ButtonCustomizeWayOne extends Component {

    render() {
        const { type, onClick } = this.props;
        const buttonStyle = style[type] || style['default'];

        return (
            <button
                style={buttonStyle}
                onClick={onClick}
            >
                {this.props.children}
            </button>
        );
    }
}

const style = {
    default: {

    },
    success: {
        borderRadius: 3,
        border: "solid 0.5px #cccccc",
        backgroundColor: "#39b54a",
        padding: "10px 20px",
        color: "#fff",
        fontSize: 12,
        lineHeight: 1.2
    }
};
