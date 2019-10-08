import React, { Component } from 'react';
import { ButtonCustomizeWayOne, Panel, PanelList, LoginForm, ButtonCustomizeWayTwo } from '../src/ui';

export default class App extends Component {

    render() {
        const data = [1, 2, 3];

        return (
            <div>
                <section>
                    <h1>Button Customize Way One</h1>
                    <ButtonCustomizeWayOne
                        type={'success'}
                        onClick={ () => alert('Yo-lo') }
                    >
                        Create new
                    </ButtonCustomizeWayOne>
                </section>

                <hr/>

                <section>
                    <h1>Button Customize Way Two</h1>
                    <div style={{ display: 'flex' }}>
                        <ButtonCustomizeWayTwo
                            role={'success'}
                            active={false}
                        >
                            Create new
                        </ButtonCustomizeWayTwo>
                        <ButtonCustomizeWayTwo
                            role={'success'}
                            active={true}
                        >
                            Create new
                        </ButtonCustomizeWayTwo>
                        <ButtonCustomizeWayTwo
                            role={'danger'}
                            active={false}
                        >
                            Create new
                        </ButtonCustomizeWayTwo>
                        <ButtonCustomizeWayTwo
                            role={'danger'}
                            active={true}
                        >
                            Create new
                        </ButtonCustomizeWayTwo>
                    </div>
                </section>

                <hr/>

                <section>
                    <h1>Panel List</h1>
                    <PanelList
                        list={data}
                        renderItem={item => {
                            return <span>Item data: {item.data}, index: {item.index}</span>
                        }}
                    />
                </section>

                <hr/>

                <section>
                    <h1>Panel</h1>
                    <Panel header={'Sign in to Sphinx'}>
                        <p>Body</p>
                    </Panel>
                </section>

                <hr/>

                <section>
                    <h1>Login Form</h1>
                    <LoginForm/>
                </section>

                <hr/>


            </div>
        );
    }
}
