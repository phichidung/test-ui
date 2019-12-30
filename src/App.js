import React, { Component }               from 'react';
import {
    PanelList,
    LoginForm,
    ButtonZoomRotate,
    Checkbox,
    Paginator,
    DataTable,
    DropDown,
    Button,
    ScrollBar,
}                                         from '../src/ui';
import Panel, { PanelBody, PanelHeader }  from './ui/Panel';
import { Clock, Timer, Todo, Form }       from './components';
import { dividers }                       from './common/dividers';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropDown : false,
            checked      : false
        };
    };

    render() {
        const data = [1, 2, 3];

        return (
            <div>
                <section>
                    <h1>Button Zoom Rotate</h1>
                    <div>
                        <ButtonZoomRotate role={'success'}
                                          active={true}
                                          move={true}
                        >
                            Create new
                        </ButtonZoomRotate>
                        <ButtonZoomRotate role={'success'}
                                          active={true}
                        >
                            Create new
                        </ButtonZoomRotate>
                        <ButtonZoomRotate role={'danger'}
                                          active={false}
                        >
                            Create new
                        </ButtonZoomRotate>
                        <ButtonZoomRotate role={'danger'}
                                          active={true}
                        >
                            Create new
                        </ButtonZoomRotate>
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
                    <h2>Panel</h2>
                    <div style={{ width: '30%' }}>
                        <Panel>
                            <PanelHeader>
                                Header
                            </PanelHeader>
                            {dividers.dividerTop}
                            <PanelBody>
                                Body
                            </PanelBody>
                        </Panel>
                    </div>
                </section>

                <hr/>

                <section>
                    <h1>Login Form</h1>
                    <LoginForm/>
                </section>

                <hr/>

                <section>
                    <h1>Checkbox</h1>
                    <Checkbox checked={this.state.checked}
                              label={'Checkbox'}
                              onClick={ () => this.setState({ checked: !this.state.checked })}
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
                                    <Checkbox checked={'true'}
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
                                            <Checkbox checked={'true'}
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
                                    <Checkbox checked={'true'}
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
                                            <Checkbox checked={'true'}
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
                    <DropDown show={this.state.showDropDown}
                              toggleDropDown={() => this.setState({ showDropDown: !this.state.showDropDown })}
                    />
                </section>

                <hr/>

                <section>
                    <h1>Button</h1>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={true}
                            role={''}
                    >
                        Click
                    </Button>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={false}
                            role={'primary'}
                    >
                        Click
                    </Button>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={false}
                            role={'secondary'}
                    >
                        Click
                    </Button>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={false}
                            role={'success'}
                    >
                        Click
                    </Button>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={false}
                            role={'info'}
                    >
                        Click
                    </Button>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={false}
                            role={'warning'}
                    >
                        Click
                    </Button>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={false}
                            role={'danger'}
                    >
                        Click
                    </Button>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={false}
                            role={'link'}
                    >
                        Click
                    </Button>
                    <Button onClick={ () => alert('Samurai')}
                            disabled={false}
                            responsive={true}
                    >
                        Click
                    </Button>
                </section>

                <hr/>

                <section>
                    <h1>ScrollBar</h1>
                    <ScrollBar/>
                </section>

                <hr/>

                <section>
                    <h1>Form</h1>
                    <Form/>
                </section>
            </div>
        );
    }
}
