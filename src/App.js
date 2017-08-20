import React, { Component } from 'react';
import Nav from './Nav.js';
import UserControls from './UserControls.js';
import Sidebar from './Sidebar.js';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <header>
        <Nav />
        <UserControls />
        <div className="tweet-container">
          <Sidebar 
            tweets={data.tweets}
            following={data.following}
            followers={data.followers}
            trends={data.trends}
          />
        </div>
      </header>
    );
  }
}
export default App;
