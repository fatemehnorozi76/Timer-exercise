import React from "react";
const CurrentHour = (props) => {
    return (
        <h1 className="CurrentHour">
            {props.CurrentHour}:
            {props.currentMinute}:
            {props.currentSecond}

        </h1>
    )
}
export default CurrentHour;