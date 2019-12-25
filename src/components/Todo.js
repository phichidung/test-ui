import React, { Component } from 'react';

export default class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
    }

    render() {
        const { items, text } = this.state;

        return (
            <div>
                <TodoList items={items} />
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <input
                        onChange={ (e) => this.handleChange(e) }
                        value={text}
                    />
                    <button>
                        Add #{items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

export class TodoList extends Component {

    render() {
        const { items } = this.props;

        return (
            <ul>
                {
                    items.map( item => <li key={item.id}>{item.text}</li> )
                }
            </ul>
        );
    }
}
