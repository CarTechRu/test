import { useCallback, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function Timer({ finishTime }) {
  const [timer, setTimer] = useState('00:00');

  const getTimeRemaining = (deadline) => {
    const diff = (Date.parse(deadline) - Date.parse(new Date()));
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 60);
    return {
      diff, hours, minutes, seconds,
    };
  };

  const startTimer = useCallback((e) => {
    const {
      diff, minutes, seconds,
    } = getTimeRemaining(e);

    if (diff >= 0) {
      setTimer(
        `${minutes > 9 ? minutes : `0${minutes}`}:${
          seconds > 9 ? seconds : `0${seconds}`}`,
      );
    }
  }, []);

  useEffect(() => {
    const date = new Date(finishTime);
    const { diff, minutes, seconds } = getTimeRemaining(date);

    if (diff >= 0) {
      setTimer(
        `${minutes > 9 ? minutes : `0${minutes}`}:${
          seconds > 9 ? seconds : `0${seconds}`}`,
      );
    }
    const id = setInterval(() => {
      startTimer(date);
    }, 1000);
    return () => { clearInterval(id); };
  }, [finishTime, startTimer]);

  return (
    <Typography variant="h5" color="grey.dark" sx={{ m: 0 }}>{ timer }</Typography>
  );
}

Timer.propTypes = {
  finishTime: PropTypes.number.isRequired,
};

export default Timer;
