
import React, { Component, useState, useEffect } from 'react';
import '../styles/App.css';

function getCurrentTime() {
  const currentDate = new Date();
  return currentDate.toLocaleTimeString().toLocaleUpperCase();
}

function isPM(hours) {
  if (hours > 12) {
    return true;
  }
  return false;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { time: getCurrentTime() };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}

export default App;

