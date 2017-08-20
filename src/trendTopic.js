import React, { Component } from 'react';

class TrendTopic extends Component {
  render() {
    return (
      <li key={this.props.index}>{this.props.trend}</li>
    )
  }
}

export default TrendTopic;
