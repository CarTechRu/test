import { useEffect, useState } from 'react';

const getReturnValues = (countDown) => {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return countDown < 0
    ? 'finished'
    : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Timer = ({ targetDate }) => {
  const [countDown, setCountDown] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return getReturnValues(countDown);
};

export default Timer;
