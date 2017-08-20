import React, { Component } from 'react';
import avatar from './avatar.jpg'

class Sidebar extends Component {
  
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__user-profile">
          <img src={avatar} />
        </div>
      </div>
    );
  }
}

export default Sidebar;

