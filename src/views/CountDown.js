import React, { Component } from "react";

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }
  state = {
    count: 10,
  };

  countDown() {
    this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    // setTimeout(() => {
    //   console.log("me");
    // }, 1000);
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(preProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        console.log(this.timer, this.state.count);
        console.log("time out....");
        clearInterval(this.timer);
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Countdown</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
