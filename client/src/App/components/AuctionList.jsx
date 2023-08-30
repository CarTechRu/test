import { useEffect, useRef, useCallback } from 'react';
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchParam, getAuctionsData } from '../../actions';
import useInterval from '../useInterval';
import AuctionCard from './AuctionCard';

function AuctionList() {
  const dispatch = useDispatch();
  const searchParam = useSelector((state) => state.auctions.searchParam);
  const isLoading = useSelector((state) => state.auctions.loading);
  const cars = useSelector((state) => state.auctions.cars);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    dispatch(getAuctionsData(searchParam));

    setTimeout(() => {
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
      }
    }, 0);
  }, [dispatch, searchParam]);

  useInterval(
    () => dispatch(getAuctionsData(searchParam)),
    process.env.CONFIG.POLLING_INTERVAL * 1000,
  );

  const loader = isFirstLoad.current ? (
    <Box pt={3} sx={{ textAlign: 'center' }}>
      <CircularProgress color="inherit" />
    </Box>
  ) : (
    ''
  );

  const changeCaptureHandler = useCallback(
    (event) => {
      dispatch(changeSearchParam(event.target.value));
    },
    [dispatch],
  );

  return (
    <Container>
      <Box mt={3} mb={2}>
        <Typography variant="h1" fontSize="h3.fontSize">
          Аукционы
        </Typography>
      </Box>

      <Box mb={3}>
        <Divider />
      </Box>

      <Box mb={5}>
        <Typography>Поиск по названию</Typography>
        <TextField
          placeholder="Введите текст"
          variant="outlined"
          size="small"
          onChangeCapture={changeCaptureHandler}
        />
      </Box>

      <Box>
        <Divider />
      </Box>

      {isLoading ? (
        loader
      ) : (
        <Box>
          <Grid container spacing={3} mt={3} mb={3}>
            {cars.map((car) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
                <Link to={`${car.id}`} style={{ textDecoration: 'none' }}>
                  <AuctionCard car={car} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default AuctionList;
