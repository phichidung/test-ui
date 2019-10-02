import React, { Component } from 'react';

export class PanelListItem extends Component {

    render() {
        return (
            <div>
                { this.props.children }
                <button>More active</button>
            </div>
        );
    }
}

export default class PanelList extends Component {

    render() {
        const { list, renderItem } = this.props;

        return (
            <ul>
                {
                    list.map((data, index) => {
                        return (
                            <li key={index}>
                                <PanelListItem>
                                    { renderItem({ data, index }) }
                                </PanelListItem>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}
