import React from "react";
const CurrentDate = (props) => {
    return (
        <div className="CurrentDate">
            <div className="CurrentDate_Number">
                {props.Day}
                {props.Month}
                {props.Year}
            </div>
            <br></br>
            {`${"Year" + "   " + "Month" + "    " + 'Day'}`}

        </div>
    )
}
export default CurrentDate;