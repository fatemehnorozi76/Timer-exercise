import React  from "react";
import  ReactDOM from "react";
import './style.css';
import  Title  from "./Title";
import  Thetime  from "./Thetime";

class Myapp extends React.Component {
    render() {
      return (
        <div className='main'>
          <Title />
          <Thetime />
        </div >
      );
    }
  }
  export default Myapp ;