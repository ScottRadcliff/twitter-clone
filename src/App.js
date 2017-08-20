import React, { Component } from 'react';
import Nav from './Nav.js';
import UserControls from './UserControls.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <header>
        <Nav />
        <UserControls />
        <div className="container">
          <Sidebar />
        </div>
      </header>
    );
  }
}

export default App;
