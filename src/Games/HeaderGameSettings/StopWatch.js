import React, {useState, useEffect} from "react";

function Controls(prop) {
    const invokeTimer = (
        <div className="d-grid gap-2 mt-3">
            <div className="btn btn-danger" onClick={prop.initWatch}>
                Start
            </div>
        </div>
    );
    const activeTimer = (
        <div className="d-grid gap-2 mt-3">
            <div className="btn btn-danger" onClick={prop.initReset}>
                Reset
            </div>
            <div className="btn btn-success" onClick={prop.initResume}>
                {prop.paused ? "Resume" : "Pause"}
            </div>
        </div>
    );
    return (
        <div>
            <div>{prop.active ? activeTimer : invokeTimer}</div>
        </div>
    );
}

const Watch = (props) => {
    return (
        <span className="display-1" hidden={props.watch}>
            <span>{("0" + Math.floor((props.t / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((props.t / 1000) % 60)).slice(-2)}</span>
            {/*<span>{("0" + ((t.time / 10) % 100)).slice(-2)}</span>*/}
        </span>
    );
}

const StopWatch = (props) => {
    const [active, setActive] = useState(true);
    const [pause, setPause] = useState(false);
    useEffect(() => {
        let timePeriod = null;
        if (active && pause === false) {
            timePeriod = setInterval(() => {
                props.setDuration((duration) => duration + 10);
            }, 10);
        } else {
            clearInterval(timePeriod);
        }
        return () => {
            clearInterval(timePeriod);
        };
    }, [active, pause]);
    const initWatch = () => {
        setActive(true);
        setPause(false);
    };
    const initResume = () => {
        setPause(!pause);
    };
    const initReset = () => {
        setActive(false);
        props.setDuration(0);
    };
    const initPause = () => {
        setActive(false);
        setPause(true);
    }
    return (
        <div className="stop-watch" hidden={props.watch}>
            <Watch t={props.duration} initPause={props.watch}/>
        </div>
    );
}

export default StopWatch;