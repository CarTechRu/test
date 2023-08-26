import { Link } from 'react-router-dom';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import Timer from '../Timer/timer';
import cardPropType from '../../utils/prop-types';

function AuctionCard({ card }) {
  const imagePath = process.env.CONFIG.IMAGES_BASEPATH;

  return (
    <Box>
      <Link to={`auction/${card.id}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ bgcolor: 'grey.light', position: 'relative' }}>

          <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">
              {card.title}
            </Typography>
            <Timer finishTime={card.finishTime} />
          </CardContent>

          <CardMedia
            sx={{ minHeight: 200 }}
            image={imagePath + card.imgUrl}
            title={card.title}
          />

          {
                card.bid !== 0
                && (
                <Box sx={{
                  bgcolor: 'grey.dark', position: 'absolute', right: 0, bottom: 0, borderRadius: '10px 0px 0 0',
                }}
                >
                  <Typography variant="h6" color="grey.contrastText" sx={{ p: 1 }}>
                    Ставка:
                    {' '}
                    {card.bid}
                    {' '}
                    р
                  </Typography>
                </Box>
                )
            }

        </Card>
      </Link>
    </Box>

  );
}

AuctionCard.propTypes = {
  card: cardPropType.isRequired,
};

export default AuctionCard;
