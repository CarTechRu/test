import { useParams } from 'react-router-dom';
import { useGetAuctionQuery } from '../../store/api';
import CarCard from '../../components/CarCard';

function Car() {
  const { car } = useParams();

  const {
    data, error, isLoading, isSuccess,
  } = useGetAuctionQuery(car);

  const {
    title, id, imgUrl, finishTime, bid, mileage,
  } = data?.auction || {};

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error.message}
      </div>
    );
  }

  return (
    <div>
      {isSuccess && (
        <CarCard
          bid={bid}
          finishTime={finishTime}
          imgUrl={imgUrl}
          title={title}
          key={id}
          mileage={mileage}
        />
      )}
    </div>
  );
}

export default Car;
