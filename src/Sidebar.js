import React, { Component } from 'react';
import avatar from './avatar.jpg'

class Sidebar extends Component {
  
  render() {
    return (
      <div className="sidebar">
        <div className="user-profile">
          <img src={avatar} />
          <div className="user-details">
            <p>Scott Radcliff<br/>
            @scottradcliff</p>
            <div className="user-stats">
              <div>Tweets <br/> {this.props.tweets}</div>
              <div>Following <br/> {this.props.following}</div>
              <div>Followers <br/> {this.props.followers}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

