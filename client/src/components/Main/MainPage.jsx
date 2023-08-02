import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown, { zeroPad } from 'react-countdown';
import { DebounceInput } from 'react-debounce-input';
import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Divider,
  FormControl,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';

import axios from 'axios';

import { apiRoutes } from '../../routes/routes';

function Loader() {
  return (
    <Skeleton animation="wave" variant="circular" width={40} height={40} />
  );
}

function MainPage() {
  const timeInterval = process.env.CONFIG.POLLING_INTERVAL;
  const [state, setState] = useState();

  async function subscribe() {
    const { data } = await axios.get(`${apiRoutes.dataPath()}`);

    setState(data.auctions);

    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, timeInterval * 1000));
    await subscribe();
  }

  useEffect(() => {
    subscribe();
  });

  return (
    <>
      <Box
        component="form"
        mt={3}
        mb={3}
        noValidate
        autoComplete="off"
      >
        <Typography variant="body1">
          Поиск по названию
        </Typography>
        <FormControl>
          <DebounceInput
            placeholder="Введите текст"
            multiline
            maxRows={4}
            size="small"
            debounceTimeout={500}
            onChange={async (e) => {
              const { value } = e.target;

              const searchData = await axios.get(apiRoutes.searchPath(value));

              setState(searchData.data.auctions);
            }}
          />
        </FormControl>
      </Box>
      <Box mb={3}>
        <Divider />
      </Box>
      <Grid container sx={{ width: 950 }} spacing={2} columns={15}>
        {(!state) ? <Loader /> : state.map(({
          title, id, imgUrl, finishTime, bid,
        }) => (
          <Grid item xs={5} key={id}>
            <Card style={{ backgroundColor: '#d7cccc' }} sx={{ maxWidth: 300 }}>
              <Link to={`/auction/${id}`} underline="hover">
                <CardActionArea>
                  <CardHeader
                    title={title}
                    titleTypographyProps={{ variant: 'body1' }}
                    sx={{ maxHeight: 10 }}
                  />
                  <CardMedia
                    component="img"
                    image={`${apiRoutes.imagePath()}${imgUrl}`}
                    height="180"
                    width="180"
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    ml={2}
                    mr={2}
                  >
                    <Countdown
                      date={finishTime}
                      zeroPadTime={2}
                      renderer={({ minutes, seconds }) => (
                        <Typography variant="body1" color="red">
                          {`${zeroPad(minutes)}:${zeroPad(seconds)}`}
                        </Typography>
                      )}
                    />
                    <Typography variant="body1">
                      {(bid === 0) ? null : `Ставка: ${bid} р`}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MainPage;
