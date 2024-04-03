import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [Timer, setTimer] = useState(0);
    const interval = useRef(null);
    const [Lap,setLap]=useState([]);
    //cntrl shift L
    const handleLap=()=>{
        // setLap((currTime=>[...currTime+1,Timer]))
        setLap(currTime=>[...currTime,Timer]);
         console.log(Lap);
         console.log(Timer);
    };
   
    
  const start=()=>{
      if(isRunning) return;
        setIsRunning(true);
       interval.current=setInterval(()=>{
        setTimer((prev)=>prev+1);
       },10);
    //    console.log(Timer);
    };

    const stop=()=>{
      if(!isRunning) return;
        setIsRunning(false);
        clearInterval(interval.current);
     
    };

    const reset=()=>{
      setIsRunning(false);
      clearInterval(interval.current);
      setTimer(0);
      setLap([]);
       console.log(Lap);
     console.log(Timer);
    };
    
   
    const formatTime=(timeVar)=>{


        let hours = Math.floor(timeVar/ (1000 * 60 * 60));
        let minutes = Math.floor(timeVar/ (1000 * 60) % 60);
        let seconds = Math.floor( timeVar/ (1000) % 60);
        let milliseconds = Math.floor(( timeVar% 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime(Timer)}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
                <button onClick={handleLap} className="lap-button">Lap</button>
                <div>
                    <h1>Laps:</h1>
                    <ul>
                        {Lap.map((lap,index)=>(
                       <li key={index}>{formatTime(lap)}</li>
                       ))};
                        
                    </ul>
                </div>

            </div>
        </div>
    
    );
    }
export default Stopwatch