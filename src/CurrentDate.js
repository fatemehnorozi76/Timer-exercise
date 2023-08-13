import React from "react";
const CurrentDate = (props) => {
    return (
        <div className="CurrentDate">
            <h1>
                
                {props.Day}
                {props.Month}
                {props.Year}
            </h1>
            <h1> {`${"Year" + "   " + "Month" + "    " + 'Day'}`}</h1>
        </div>
    )
}
export default CurrentDate;