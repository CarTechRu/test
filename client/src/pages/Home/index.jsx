import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLazyFilterAuctionsQuery } from '../../store/api';
import Search from '../../components/Search';
import CarCard from '../../components/CarCard';
// eslint-disable-next-line import/extensions
import { Wrapper } from './styled.js';
import selectSearch from '../../store/search/selectors';

function Home() {
  const [refetch, { data, error, isLoading }] = useLazyFilterAuctionsQuery();
  const { searchValue } = useSelector(selectSearch);
  // eslint-disable-next-line no-unused-vars
  const [_, setPollingInterval] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    refetch(searchValue);
  }, [searchValue, refetch]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch(searchValue);
    }, process.env.CONFIG.POLLING_INTERVAL);
    setPollingInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [refetch, searchValue]);

  const redirect = (id) => navigate(`/${id}`);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <Search />
      <Wrapper>
        {data?.auctions.map(({
          bid, finishTime, id, imgUrl, title,
        }) => (
          <CarCard
            id={id}
            redirect={redirect}
            key={id}
            bid={bid}
            finishTime={finishTime}
            imgUrl={imgUrl}
            title={title}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default Home;
