import React, { Component } from 'react';
import Nav from './Nav.js';
import UserControls from './UserControls.js';
import Sidebar from './Sidebar.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <header>
        <Nav />
        <UserControls />
        <div className="tweet-container">
          <Sidebar 
            tweets={3000}
            following={1200}
            followers={1500}
          />
        </div>
      </header>
    );
  }
}

export default App;
