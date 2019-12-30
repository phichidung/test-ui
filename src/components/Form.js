import React, { Component } from 'react';

export default class Form extends Component {

    onSubmit(event) {
        event.preventDefault();
    };

    render() {

        return (
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="mail">E-mail:</label>
                    <input type="email" id="mail"/>
                </div>
                <div>
                    <label htmlFor="msg">Message:</label>
                    <textarea id="msg"/>
                </div>
                <div onClick={ (e) => this.onSubmit(e)} className="button">
                    <button type="submit">Send your message</button>
                </div>
            </form>
        );
    }
}