import React, { Component } from 'react';

export default class Panel extends Component {

    render() {
        const { header, children } = this.props;

        return (
            <div>
                <div>
                    { header }
                </div>
                <div>
                    { children }
                </div>
            </div>
        );
    }
}
