import { useState, useEffect } from 'react';

function Timer(props) {
  const { finishTime } = props;
  const date = new Date(finishTime);
  const [endOfTime] = useState(date.getTime());
  const [[diffH, diffM, diffS], setDiff] = useState([0, 0, 0]);
  const [tick, setTick] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [timerId, setTimerID] = useState(0);

  useEffect(() => {
    const diff = (endOfTime - new Date()) / 1000;
    if (diff < 0) {
      setIsTimeout(true);
      return;
    }
    setDiff([
      Math.floor((diff / 3600)),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime, endOfTime]);

  useEffect(() => {
    if (isTimeout) clearInterval(timerId);
  }, [isTimeout, timerId]);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTick(!tick);
    }, 1000);
    setTimerID(timerID);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <span>
      {`${diffH.toString().padStart(2, '0')}
      :
      ${diffM.toString().padStart(2, '0')}
      :
      ${diffS.toString().padStart(2, '0')}`}

    </span>
  );
}

export default Timer;
