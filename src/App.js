import React, { Component } from 'react';
import Button from "./ui/Button";
import Panel from "./ui/Panel";
import LoginForm from "./ui/LoginForm";

export default class App extends Component {

    render() {

        return (
            <div>
                <Button
                    type={'success'}
                    onClick={ () => alert('Yo-lo') }
                >
                    Create new
                </Button>

                <Panel header={'Login'}>
                    Body
                </Panel>

                <LoginForm/>
            </div>
        );
    }
}
