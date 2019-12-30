import React, { Component } from 'react';
import './ScrollBar.css';

export default class ScrollBar extends Component {

    render() {
        const users = [
            {
                id: 1,
                name: 'Itami1',
                button: 'User 1'
            },
            {
                id: 2,
                name: 'Itami2',
                button: 'User 2'
            },
            {
                id: 3,
                name: 'Itami3',
                button: 'User 2'
            },
            {
                id: 4,
                name: 'Itami4',
                button: 'User 2'
            },
            {
                id: 5,
                name: 'Itami5',
                button: 'User 2'
            },
        ];

        return (
            <div className={'scroll-bar'}>
                {
                    users.map((user, index) => {
                        return (
                            <div style={{ display: 'flex', justifyContent: 'center', margin: 50 }}>
                                <div>
                                    {user.name}
                                </div>
                                <div style={{ marginLeft: 5 }}>
                                    <button>
                                        {user.button}
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
