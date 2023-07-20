import { clear } from "@testing-library/user-event/dist/clear";
import React  from "react";
import  ReactDOM from "react";

let intervall;
class Thetime extends React.Component {
    constructor() {
      super();
      this.state = {
        time: new Date(),
        reverseCounter :10
      }
    }

    componentDidMount(){
      intervall= setInterval(()=>{
        this.setState ({
          time: new Date(),
          reverseCounter : this.state.reverseCounter - 1
        })
      } , 1000)
    }
    componentDidUpdate(){
      if(this.state.reverseCounter == 0){
        clearInterval(intervall)
      }
    }
    render() {
      
  
      return (
        <h1 className='Thetime'>{this.state.time.toLocaleTimeString()+"counter:" + this.state.reverseCounter}</h1>
      );
    }
  }

  export default Thetime ;