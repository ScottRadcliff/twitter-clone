import React, { Component } from 'react';
import avatar from './avatar.jpg'
import TrendTopic from './trendTopic.js'

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
        <div className="sidebar-box">
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

        <div className="sidebar-box">
          <div className="trends">
            <p>Trends</p>
            <ul>{this.props.trends.map(function(item) { return <TrendTopic trend={item}/> })}</ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Sidebar;

