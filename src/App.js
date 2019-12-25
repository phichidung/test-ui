import React, { Component } from 'react';
import {
    Panel,
    PanelList,
    LoginForm,
    ButtonCustomizeWayTwo,
    Checkbox,
    Paginator,
    DataTable,
    DropDown,
    Button
}                           from '../src/ui';
import Clock                from './components/Clock';
import Timer                from './components/Timer';
import Todo                 from './components/Todo';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false
        };
    };

    toggleDropDown() {
        this.setState({
            showDropDown: !this.state.showDropDown
        })
    };

    render() {
        const data = [1, 2, 3];

        return (
            <div>
                <section>
                    <h1>Button Customize Way Two</h1>
                    <div>
                        <ButtonCustomizeWayTwo
                            role={'success'}
                            active={true}
                            move={true}
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
                        renderItem={item => <span>Item data: {item.data}, index: {item.index}</span>}
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

                <section>
                    <h1>Checkbox</h1>
                    <Checkbox
                        checked={'true'}
                        label={'Checkbox'}
                        onChange={ (checked) => console.log(checked) }
                    />
                </section>

                <hr/>

                <section>
                    <h1>Paginator</h1>
                    <Paginator/>
                </section>

                <hr/>

                <section>
                    <h1>Data Table</h1>
                    <div>
                        <DataTable
                            header={[
                                <th>
                                    <Checkbox
                                        checked={'true'}
                                        onChange={ (checked) => console.log(checked) }
                                    />
                                </th>,
                                <th>Member ID</th>,
                                <th>Login ID</th>,
                                <th>Status</th>,
                                <th>Actions</th>
                            ]}
                            data={[
                                { memberID: 1, loginID: 1, status: 'loading...' },
                                { memberID: 2, loginID: 2, status: 'pending...' },
                                { memberID: 3, loginID: 3, status: 'doing...' },
                            ]}
                            renderRow={ ({ memberID, loginID, status, index }) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <Checkbox
                                                checked={'true'}
                                                onChange={ (checked) => console.log(checked) }
                                            />
                                        </td>
                                        <td>{memberID}</td>
                                        <td>{loginID}</td>
                                        <td>{status}</td>
                                        <td>Actions</td>
                                    </tr>
                                )
                            }}
                        />
                    </div>
                    <hr/>
                    <h1>Data Table Hightlighted</h1>
                    <div>
                        <DataTable
                            header={[
                                <th>
                                    <Checkbox
                                        checked={'true'}
                                        onChange={ (checked) => console.log(checked) }
                                    />
                                </th>,
                                <th>Member ID</th>,
                                <th>Login ID</th>,
                                <th>Status</th>,
                                <th>Actions</th>
                            ]}
                            data={[
                                { memberID: 1, loginID: 1, status: 'loading...' },
                                { memberID: 2, loginID: 2, status: 'pending...' },
                                { memberID: 3, loginID: 3, status: 'doing...' },
                            ]}
                            renderRow={ ({ memberID, loginID, status, index }) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <Checkbox
                                                checked={'true'}
                                                onChange={ (checked) => console.log(checked) }
                                            />
                                        </td>
                                        <td>{memberID}</td>
                                        <td>{loginID}</td>
                                        <td>{status}</td>
                                        <td>Actions</td>
                                    </tr>
                                )
                            }}
                            hightlighted={true}
                        />
                    </div>
                </section>

                <hr/>

                <section>
                    <h1>Clock</h1>
                    <Clock/>
                </section>

                <hr/>

                <section>
                    <h1>Timer</h1>
                    <Timer/>
                </section>

                <hr/>

                <section>
                    <h1>Todo</h1>
                    <Todo/>
                </section>

                <hr/>

                <section>
                    <h1>DropDown</h1>
                    <DropDown
                        show={this.state.showDropDown}
                        toggleDropDown={ () => this.toggleDropDown() }
                    />
                </section>

                <hr/>

                <section>
                    <h1>Button</h1>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={true}
                        role={''}
                    >
                        Click
                    </Button>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={false}
                        role={'primary'}
                    >
                        Click
                    </Button>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={false}
                        role={'secondary'}
                    >
                        Click
                    </Button>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={false}
                        role={'success'}
                    >
                        Click
                    </Button>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={false}
                        role={'info'}
                    >
                        Click
                    </Button>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={false}
                        role={'warning'}
                    >
                        Click
                    </Button>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={false}
                        role={'danger'}
                    >
                        Click
                    </Button>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={false}
                        role={'link'}
                    >
                        Click
                    </Button>
                    <Button
                        onClick={ () => alert('Samurai')}
                        disabled={false}
                        responsive={true}
                    >
                        Click
                    </Button>
                </section>

                <hr/>
            </div>
        );
    }
}
