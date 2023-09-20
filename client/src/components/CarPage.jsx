import {
  Box, CardMedia, Typography, CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useParams, useNavigate } from 'react-router-dom';

import { useGetDataCarQuery } from '../store/carsApi';

function CarPage() {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  const handleClick = () => {
    navigate('/');
  };

  const { data = [], isLoading } = useGetDataCarQuery(id);
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

  const { title, imgUrl, mileage } = data.auction;
  return (
    <Box>
      <Typography mb={2}>
        {`Подробная информация об автомобиле ${title}`}
      </Typography>
      <Box sx={{
        position: 'relative',
        maxWidth: '600px',
      }}
      >
        <CardMedia
          sx={{
            maxWidth: '600px',
          }}
          component="img"
          image={`${process.env.CONFIG.IMAGES_BASEPATH}${imgUrl}`}
        />
        <CloseIcon
          fontSize="medium"
          onClick={handleClick}
          sx={{
            position: 'absolute',
            left: '95%',
            top: '1%',
            cursor: 'pointer',
          }}
        />
      </Box>
      <Typography sx={{ mt: 3 }}>
        {`Пробег: ${mileage} км`}
      </Typography>
    </Box>
  );
}

export default CarPage;
