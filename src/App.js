import React, { Component } from 'react';
import { Button, Panel, PanelList, LoginForm } from '../src/ui';

export default class App extends Component {

    render() {
        const data = [1, 2, 3];

        return (
            <div>
                <Button
                    type={'success'}
                    onClick={ () => alert('Yo-lo') }
                >
                    Create new
                </Button>

                <PanelList
                    list={data}
                    renderItem={item => {
                        return <span>Item data: {item.data}, index: {item.index}</span>
                    }}
                />

                <Panel header={'Sign in to Sphinx'}>
                    <p>Body</p>
                </Panel>

                <LoginForm/>
            </div>
        );
    }
}
