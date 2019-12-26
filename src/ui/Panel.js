import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import './Panel.css';

export class PanelHeader extends Component {

    render() {
        const { children } = this.props;

        return (
            <div className={'itami panel-header'}>
                {children}
            </div>
        );
    }
}

export class PanelBody extends Component {

    render() {
        const { children } = this.props;

        return (
            <div className={'itami panel-body'}>
                {children}
            </div>
        );
    }
}

export default class Panel extends Component {

    render() {
        const { children } = this.props;

        return (
            <div className={'itami panel'}>
                { children }
            </div>
        );
    }
}

PropTypes.defaultProps = {
    children: <div></div>
};

PropTypes.propTypes = {
    children: PropTypes.node
};
