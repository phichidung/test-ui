import React, { Component } from 'react';
import './DataTable.css';

export default class DataTable extends Component {

    render() {
        const { header, data, renderRow, hightlighted } = this.props;

        return (
            <table className={`neu data-table ${hightlighted ? 'hightlighted' : ''}`}>
                { header &&
                    <thead>
                        <tr>
                            {header}
                        </tr>
                    </thead>
                }
                <tbody>
                    {
                        data.map((rowData, index) => renderRow({ ...rowData, index }))
                    }
                </tbody>
            </table>
        );
    }
}
