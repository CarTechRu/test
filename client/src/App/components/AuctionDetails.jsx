import { useEffect } from 'react';
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAuctionDetailsData } from '../../actions';

function AuctionDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auctionDetails.loading);
  const auction = useSelector((state) => state.auctionDetails.info);

  useEffect(() => {
    dispatch(
      getAuctionDetailsData(`${process.env.CONFIG.API_BASEPATH}/auction/${id}`),
    );
  }, [dispatch, id]);

  return (
    <Container>
      <Box>
        <Box mt={3} mb={2}>
          <Typography variant="h1" fontSize="h3.fontSize">
            Аукционы
          </Typography>
        </Box>

        <Box mb={2}>
          <Divider />
        </Box>

        {isLoading ? (
          <Box pt={3} sx={{ textAlign: 'center' }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <Box>
            {' '}
            <Box mb={3}>
              <Typography>
                Подробная информация об автомобиле
                {' '}
                {auction.title}
              </Typography>
              <Box
                component="img"
                mt={3}
                alt={`The picture of ${auction.title}`}
                src={`${process.env.CONFIG.IMAGES_BASEPATH}${auction.imgUrl}`}
              />
            </Box>
            <Box mb={3}>
              <Typography>
                Пробег:
                {' '}
                {auction.mileage}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default AuctionDetails;
