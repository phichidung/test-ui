import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import './Checkbox.css';

export default class Checkbox extends Component {

    render() {
        const { label, onClick, checked } = this.props;

        return (
            <label style={{ display: 'flex' }} onClick={onClick}>
                <div className={`neu checkbox ${checked ? 'checked' : ''}`}>
                    {
                        checked && <img className={'neu checkbox-image'} src={require('../images/checkmark.svg')} alt={'checkmark'} />
                    }
                </div>
                &nbsp;
                <div>
                    {label}
                </div>
            </label>
        );
    }
}

PropTypes.defaultProps = {
    checked : false,
    label   : '',
    onClick : () => {}
};

PropTypes.propTypes = {
    checked : PropTypes.bool,
    label   : PropTypes.string,
    onClick : PropTypes.func
};
