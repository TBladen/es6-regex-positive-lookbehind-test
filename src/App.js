import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const regex = /^([A-Za-z0-9_]+)((?<=[A-Za-z0-9_]{3})\*)?/

class App extends Component {
  state = {
    groups: [],
  }

  onInputChange = (event) => {
    this.setState({
      groups: regex.exec(event.target.value),
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <input onChange={this.onInputChange} />
          { this.state.groups && this.state.groups.length > 2 && (
              <ul className='matches'>
                <li>ID: {this.state.groups[1]}</li>
                <li>Wildcard: {this.state.groups[2] === '*' ? 'true' : 'false'}</li>
              </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
