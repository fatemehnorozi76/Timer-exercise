import React from "react";
import ReactDOM from "react";
import './style.css';
import Title from "./Title";
import Thetime from "./Thetime";
//function
// start_func(() => {

// }
// )

// stop_func(() => {
 
// }
// )
// reset_func(() => {

// }
// )
//function

class Myapp extends React.Component {
  render() {
    return (
      <div className='main'>
        <Title />
        <Thetime />
        <button className="stop"  >start</button>
        <button className="start" >stop</button>
        <button className="reset" >reset</button>
      </div >
    );
  }
}
export default Myapp;