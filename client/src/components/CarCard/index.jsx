/* eslint-disable import/extensions */
/* eslint-disable react/require-default-props */
import { useEffect, useState, memo } from 'react';
import { differenceInSeconds } from 'date-fns';
import PropTypes from 'prop-types';
import {
  BidWrapper, Wrapper, Description, Title, FinishTime, Image, MileAge, BidText,
} from './styled.js';

function CarCard({
  bid, finishTime, imgUrl, title, redirect, id, mileage,
}) {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const imageUrlCorrect = `${process.env.CONFIG.IMAGES_BASEPATH}${imgUrl}`;

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const remainingTime = differenceInSeconds(finishTime, currentTime);

    return remainingTime;
  };

  const padZero = (value) => value.toString().padStart(2, '0');

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const remainingTime = calculateTimeRemaining();
      if (remainingTime <= 0) {
        clearInterval(timerInterval);
      } else {
        setTimeRemaining(remainingTime);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <Wrapper onClick={() => redirect && redirect(id)}>
      <Description>
        <Title>{title}</Title>
        {timeRemaining >= 0 ? (
          <FinishTime>
            Осталось:
            {' '}
            {formatTime(timeRemaining)}
          </FinishTime>
        ) : (
          <FinishTime>Аукцион окончен!</FinishTime>
        )}
      </Description>
      <BidWrapper>
        {mileage && <MileAge>{`Пробег: ${mileage}`}</MileAge>}
        <BidText>{`Ставка ${bid} р`}</BidText>
      </BidWrapper>
      <Image src={imageUrlCorrect} />
    </Wrapper>
  );
}

CarCard.propTypes = {
  bid: PropTypes.number.isRequired,
  finishTime: PropTypes.instanceOf(Date).isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  redirect: PropTypes.func,
  id: PropTypes.number,
  mileage: PropTypes.number,
};

export default memo(CarCard);
