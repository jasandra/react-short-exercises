import React, { Component } from "react";
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

class Clock extends Component {
  state = {
    date: new Date().toLocaleString(),
  };

  componentDidMount() {
    setInterval(
      () =>
        this.setState(() => ({
          date: new Date().toLocaleString(),
        })),
      1000
    );
  }

  render() {
    return (
      <div>
        <ClockTime date={this.state.date} />
        <ClockDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
