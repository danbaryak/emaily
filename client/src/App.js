import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const SomeLink = ({url, children}) => (
    <strong><a href={url}>{children}</a></strong>
)

const SomeTitle = ({children}) => <h3>{children}</h3>

const Card = ({children}) => (
    <div className="Card">
        {children}
    </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SomeTitle>Hi There</SomeTitle>
          <SomeTitle>Another Title</SomeTitle>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="Link" href="/auth/google">Log In with Google</a>
        <Card>
            This is some text in a card
        </Card>
        <Card>
            This is some text in a card
        </Card>
      </div>
    );
  }
}

export default App;
