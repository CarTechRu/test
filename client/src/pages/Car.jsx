import {
  Box,
  Container,
  Typography,
  CircularProgress,
  CardMedia,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchId, clear } from '../reducers/searchId';
import { search } from '../reducers/search';

const imagesBasePath = process.env.CONFIG.IMAGES_BASEPATH;

function Car() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const searchCarId = useSelector((state) => state.searchId?.car);
  const searchAuctions = useSelector((state) => state.search?.auctions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchId(id));
    dispatch(search(''));
    return () => {
      dispatch(clear());
    };
  }, [id, dispatch]);

  useEffect(() => {
    const currentCar = searchAuctions?.find((item) => item.id === Number(id));
    setCar(currentCar);
  }, [searchAuctions, id]);

  return (
    <Container sx={{ minHeight: '100vh', marginBottom: '100px' }}>
      {searchAuctions.length === 0 || !searchCarId ? (
        <CircularProgress
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: 'auto',
            textAlign: 'center',
          }}
        />
      ) : (
        <Box sx={{ maxWidth: 700 }}>
          <Typography
            fontSize="h6.fontSize"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            Подробная информация об автомобиле
            {car?.title}
          </Typography>

          <CardMedia
            sx={{ maxWidth: 500, margin: '36px 0 26px' }}
            component="img"
            height="378"
            image={`${imagesBasePath}${car?.imgUrl}`}
            alt={car?.title}
          />

          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            Пробег: {searchCarId?.mileage} км
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default Car;
