/* eslint-disable react/prop-types */
import { memo } from 'react';
import {
  Box, Card, CardHeader, CardMedia, Typography,
} from '@mui/material';
import { cardHeaderStyle, bidStyle } from '../styles';
import Timer from './Timer';

function AuctionCard({ car }) {
  return (
    <Card elevation={0}>
      <CardHeader
        title={car.title}
        titleTypographyProps={{ variant: 'subtitle1' }}
        subheader={<Timer targetDate={car.finishTime} />}
        sx={cardHeaderStyle}
      />
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={`${process.env.CONFIG.IMAGES_BASEPATH}${car.imgUrl}`}
          height="150"
        />
        {car.bid > 0 && car.finishTime - Date.now() > 0 ? (
          <Box sx={bidStyle}>
            <Typography sx={{ fontWeight: '600', lineHeight: 1 }}>
              Ставка:
              {' '}
              {car.bid}
              {' '}
              р
            </Typography>
          </Box>
        ) : (
          ''
        )}
      </Box>
    </Card>
  );
}

export default memo(AuctionCard);
