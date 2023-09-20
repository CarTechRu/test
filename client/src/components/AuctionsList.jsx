import {
  Grid, Box, CircularProgress, Typography, Divider,
} from '@mui/material';

import { useState } from 'react';

import { useGetCarsQuery } from '../store/carsApi';

import AuctionsItem from './AuctionsItem';
import Search from './Search';

function AuctionsList() {
  const [search, setSearch] = useState('');
  const { data: { auctions } = [], isLoading } = useGetCarsQuery(search, {
    pollingInterval: process.env.CONFIG.POLLING_INTERVAL * 1000,
  });

  const handleChange = (e) => {
    if (!e.target.value) {
      setSearch('');
      return;
    }
    setSearch(e.target.value);
  };

  if (isLoading) {
    return (
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}
      >
        <CircularProgress sx={{ marginLeft: '10px' }} />
        <Typography>
          Loading...
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <Search value={search} onChange={handleChange} />
      <Box my={3}>
        <Divider />
      </Box>
      <Grid container spacing={2}>
        {auctions.map((item) => (
          <AuctionsItem key={item.id} props={item} />
        ))}
      </Grid>
    </>

  );
}

export default AuctionsList;
