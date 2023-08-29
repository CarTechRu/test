import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { useGetCarQuery } from '../../redux/api';

const imagePath = process.env.CONFIG.IMAGES_BASEPATH;

function AuctionPage() {
  const { id } = useParams();

  const {
    data: car,
  } = useGetCarQuery(+id);

  return (
    <Box mt={2} mb={2}>
      {car && (
      <>
        <Typography variant="subtitle1" mb={2}>
          {`Подробная информация об автомобиле ${car.auction.title}`}
        </Typography>
        <img
          src={`${imagePath}${car.auction.imgUrl}`}
          alt={car.auction.title}
          loading="lazy"
          width="400"
          height="300"
        />
        <Typography variant="subtitle1" mt={2}>
          {`Пробег: ${car.auction.mileage} км`}
        </Typography>
      </>
      )}
    </Box>
  );
}

export default AuctionPage;
