import React, { useEffect } from "react";
import { ReactDOM } from "react";
import './Style.css';
import Timer from "./Timer";
import { useState } from "react";
import CurrentHour from "./CurrentHour";
import CurrentDate from "./CurrentDate";

let Intervall;
const Myapp = () => {
    const [HourTimer, setHourTimer] = useState(0);
    const [MinuteTimer, setMinuteTimer] = useState(59);
    const [SecondTimer, setSecondTimer] = useState(56);
    const [isstartFlag, setisstartFlag] = useState(true);
    const [Day, setDay] = useState(new Date().getDay());
    const [Month, setMonth] = useState(new Date().getMonth());
    const [Year, setYear] = useState(new Date().getFullYear());
    const [currentHour, setCurrentHour] = useState(new Date().getHours());
    const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
    const [currentSecond, setCurrentSecond] = useState(new Date().getSeconds());

    // useEffect

    useEffect(() => {
        if (SecondTimer == 60) {
            setSecondTimer(0);
            setMinuteTimer(a => a + 1);
        }
        if (MinuteTimer == 60) {
            setMinuteTimer(0);
            setHourTimer(a => a + 1);
        }
        if (HourTimer == 60) {
            reset_Timer();
        }
    }, [SecondTimer, MinuteTimer, HourTimer]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMinute(new Date().getMinutes());
            setCurrentHour(new Date().getHours());
            setCurrentSecond(new Date().getSeconds());
            setYear(new Date().getFullYear());
            setMonth(new Date().getMonth());
            setDay(new Date().getDay());

            if (SecondTimer == 60) {
                setSecondTimer(0);
                setMinuteTimer(a => a + 1);
            }
            if (MinuteTimer == 60) {
                setMinuteTimer(0);
                setHourTimer(a => a + 1);
            }
            if (HourTimer == 60) {
                reset_Timer();
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [currentHour, currentMinute, currentSecond,
        Day, Month, Year,]);

    // useEffect
    /////////////////////////////////////////////////////////////

    // Function
    const start_Timer = () => {
        if (isstartFlag) {
            Intervall = setInterval(() => {
                setSecondTimer(a => a + 1);
                //updater function
                // updater =(a)=>a+1
            }, 1000);
            setisstartFlag(false);
        }
    }

    const stop_Timer = () => {
        clearInterval(Intervall);
        setisstartFlag(isstartFlag == false);
    }

    const reset_Timer = () => {
        setSecondTimer(0);
        setMinuteTimer(0);
        setHourTimer(0);

    }
    // Function
    return (
        <div className="main">

            <Timer
                HourTimer={`${HourTimer > 9 ? HourTimer : "0" + HourTimer}`}
                MinuteTimer={`${MinuteTimer > 9 ? MinuteTimer : "0" + MinuteTimer}`}
                SecondTimer={`${SecondTimer > 9 ? SecondTimer : "0" + SecondTimer}`}
                isstartFlag={isstartFlag}
                reset_Timer={reset_Timer}
                stop_Timer={stop_Timer}
                start_Timer={start_Timer}

            />
            <div className="CurrentHour_CurrentDate">

                <CurrentHour
                    CurrentHour={`${currentHour > 9 ? currentHour : "0" + currentHour}`}
                    currentMinute={`${currentMinute > 9 ? currentMinute : "0" + currentMinute}`}
                    currentSecond={`${currentSecond > 9 ? currentSecond : "0" + currentSecond}`}
                />
                <CurrentDate
                    Day={`${Day > 9 ? Day : "0" + Day + "    "}`}
                    Month={`${Month > 9 ? Month : "0" + Month + "   "}`}
                    Year={`${Year > 9 ? Year : "0" + Year + "   "}`}
                />

            </div>
        </div>

    )
}
export default Myapp;
