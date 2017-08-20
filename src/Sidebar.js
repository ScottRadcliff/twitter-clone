import React, { Component } from 'react';
import avatar from './avatar.jpg'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props.tweets,
      following: this.props.following,
      followers: this.props.followers
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="user-profile">
          <img src={avatar} />
          <div className="user-details">
            <p>Scott Radcliff<br/>
            @scottradcliff</p>
            <div className="user-stats">
              <div>Tweets <br/> {this.state.tweets}</div>
              <div>Following <br/> {this.state.following}</div>
              <div>Followers <br/> {this.state.followers}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

