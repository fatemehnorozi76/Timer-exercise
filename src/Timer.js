import React from "react";
const Timer = (props) => {
  return (
    <h1 className="timer">
      {props.HourTimer}:
      {props.MinuteTimer}:
      {props.SecondTimer}
      <div className="btn">
        <button className="start" onClick={props.start_Timer} >start</button>
        <button className="stop" onClick={props.stop_Timer} >stop</button>
        <button className="reset" onClick={props.reset_Timer}>reset</button>
      </div>
    </h1>
  )

}


export default Timer;
