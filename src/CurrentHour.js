import React from "react";
const CurrentHour = (props) => {
    return (
        <div className="CurrentHour">
            {props.CurrentHour}:
            {props.currentMinute}:
            {props.currentSecond}
        </div>
    )
}
export default CurrentHour;