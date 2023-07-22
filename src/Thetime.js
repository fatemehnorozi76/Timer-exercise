import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import ReactDOM from "react";

let intervall_hour;
let intervall_minute;
let intervall_second;
// let intervall_hour;
// let intervall_minute;
// let intervall_second;
class Thetime extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0
    }
  }

  componentDidMount() {
    intervall_hour = setInterval(() => {
      this.setState({
        hour: this.state.hour + 1,
      })
    }, 60000 * 60)

    intervall_minute = setInterval(() => {
      this.setState({
        minute: this.state.minute + 1,
      })
    }, 60000)

    intervall_second = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      })

    }, 1000)
  }

  componentDidUpdate() {
    if (this.state.second > 60) {
      this.setState({
        second: this.state.second = 0,
      })
    }
    if (this.state.minute > 60) {
      this.setState({
        minute: this.state.minute = 0,
      })
    }
  }

  render() {
    return (
      <h1 className='Thetime'>{this.state.hour} :
        {this.state.minute} :
        {this.state.second}</h1>
    );
  }
}

export default Thetime;