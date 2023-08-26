import { useParams } from 'react-router-dom';

import {
  Box, CircularProgress, Stack, Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from '../../utils/api';

function InfoCard() {
  const { id } = useParams();
  const { auctions } = useSelector((state) => state.auctions);
  const [isLoading, setLoading] = useState(false);
  const [mileage, setMileage] = useState(null);
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const imagePath = process.env.CONFIG.IMAGES_BASEPATH;

  useEffect(() => {
    setLoading(true);
    api.getAuctionInfo(id)
      .then((res) => setMileage(res.auction.mileage))
    // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  const currentAuto = useMemo(
    () => auctions.find((item) => item.id === Number(id)),
    [auctions, id],
  );

  useEffect(() => {
    setTitle(currentAuto.title);
    setImgUrl(imagePath + currentAuto.imgUrl);
  }, [currentAuto, imagePath]);

  const content = isLoading && title && imgUrl ? (
    <Stack alignItems="center">
      <CircularProgress />
    </Stack>
  ) : (
    <Box>
      <Typography sx={{ pb: 2 }}>
        Подробная информация об автомобиле
        {' '}
        {title}
      </Typography>
      <img src={imgUrl} alt={title} />
      <Typography sx={{ pt: 2 }}>
        Пробег:
        {' '}
        {mileage}
        {' '}
        км
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ width: 1 }}>
      {content}
    </Box>
  );
}

export default InfoCard;
