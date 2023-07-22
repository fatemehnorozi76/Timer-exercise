import React from "react";
import ReactDOM from "react";
import './style.css';
import Title from "./Title";
import Thetime from "./Thetime";
//////////////////////////////////////////////////////
//function
var minutes = 0;
var seconds = 0;
var Interval;

start_func(() => {
  clearInterval( Interval );
  Interval = setInterval( Thetime, 999 );
}
)

stop_func(() => {
  clearInterval( Interval );
  clearInterval( Interval );
  clearInterval( Interval );
}
)
reset_func(() => {
  clearInterval( Interval );
  minutes = 0;
  seconds = 0;
}
)

//function

class Myapp extends React.Component {
  render() {
    return (
      <div className='main'>
        <Title />
        <Thetime />
        <button className="stop" onClick={stop_func()} >start</button>
        <button className="start"  onClick={start_func()}>stop</button>
        <button className="reset"  onClick={reset_func()}>reset</button>
      </div >
    );
  }
}
export default Myapp;
/////////////////////////////////////////////