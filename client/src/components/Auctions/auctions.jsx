import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import {
  Box, CircularProgress, Divider, Stack,
} from '@mui/material';
import { getAuctions, updateAuctions } from '../../actions';
import AuctionCard from '../AuctionCard/auction-card';
import useInterval from '../../utils/useIntreval';
import Filter from '../Filter/filter';

function Auctions() {
  // eslint-disable-next-line max-len
  const { auctions, getAuctionsRequest, getAuctionsFailed } = useSelector((state) => state.auctions);

  const { filter } = useSelector((state) => state.filter);
  const pollingInterval = process.env.CONFIG.POLLING_INTERVAL;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctions());
  }, [dispatch]);

  useInterval(() => {
    dispatch(updateAuctions());
  }, pollingInterval * 1000);

  const filteredAuctions = useMemo(
    () => auctions.filter(
      (item) => item.title.toLowerCase().includes(filter.toLowerCase()),
    ),
    [auctions, filter],
  );

  return (
    <>
      <Box mb={3}>
        <Filter />
      </Box>

      <Box mb={3}>
        <Divider />
      </Box>

      { getAuctionsFailed && <p>Ошибка загрузки данных</p> }
      {
          getAuctionsRequest
                && (
                <Stack alignItems="center">
                  <CircularProgress />
                </Stack>
                )
      }
      { !getAuctionsRequest && !getAuctionsFailed && filteredAuctions.length > 0
                && (
                <Box sx={{ width: 1 }}>
                  <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={3}>
                    {filteredAuctions.map((card) => (
                      <AuctionCard
                        key={card.id}
                        card={card}
                      />
                    ))}
                  </Box>
                </Box>
                )}
    </>
  );
}

export default Auctions;
