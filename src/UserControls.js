import React, { Component } from 'react';

class UserControls extends Component {
  render() {
    return(
      <div className="user-controls">
        <form action="#" method="get" className="user-controls__search-form">
          <input type="search" placeholder="search" className="user-controls__search-form--input-search" />
        </form>

        <img src="images/avatar.jpg" className="user-controls__avatar-image" />

        <a href="#" className="user-controls__tweet-link">Tweet</a>
      </div>
    );
  }
}

export default UserControls;
