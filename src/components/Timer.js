import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds =90,seconds,setSeconds} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    // const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className='mt-2 ' >
        { minutes === 0 && seconds === 0
            ? null
            : <h3> {seconds < 10 ?  `0${seconds}` : seconds}</h3> 
        }
        </div>
    )
}

export default Timer;