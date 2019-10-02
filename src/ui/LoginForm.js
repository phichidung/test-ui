import React, { Component } from 'react';
import Panel from "./Panel";

export default class LoginForm extends Component {

    render() {

        return (
            <Panel header={'Login'}>
                <input type="text" placeholder={'username'}/>
                <input type="password" placeholder={'password'}/>
            </Panel>
        );
    }
}
