import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import axios from 'axios';

import { apiRoutes } from '../../routes/routes';

function AuctionPage() {
  const { id } = useParams();
  const [auction, setAuction] = useState();

  useEffect(() => {
    async function fetchData() {
      await axios.get(`${apiRoutes.auctionPath(id)}`)
        .then((res) => res.data.auction)
        .then((data) => setAuction(data));
    }

    fetchData();
  }, [id]);

  return (
    <Box mt={2} mb={2}>
      {auction && (
      <>
        <Typography variant="subtitle1" mb={2}>
          {`Подробная информация об автомобиле ${auction.title}`}
        </Typography>
        <img
          src={`${apiRoutes.imagePath()}${auction.imgUrl}`}
          alt={auction.title}
          loading="lazy"
          width="400"
          height="300"
        />
        <Typography variant="subtitle1" mt={2}>
          {`Пробег: ${auction.mileage} км`}
        </Typography>
      </>
      )}
    </Box>
  );
}

export default AuctionPage;
