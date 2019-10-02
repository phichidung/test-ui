import React, { Component } from 'react';
import Button from "./ui/Button";

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
        </div>
    );
  }
}
