import {
  Card, CardContent, CardMedia, Typography, Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Timer from './Timer';

function AuctionsItem({ props }) {
  const {
    title, finishTime, imgUrl, bid,
  } = props;
  const navigate = useNavigate();
  const onSetActiveCar = (item) => {
    navigate(`/auctions/${item.id}`);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      onClick={() => onSetActiveCar(props)}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Card sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
      }}
      >
        <CardContent sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#e9e9e9',
          padding: '5px',
        }}
        >
          <Typography>
            {title}
          </Typography>
          {finishTime ? (
            <Typography sx={{
              fontWeight: '500',
              color: 'gray',
            }}
            >
              <Timer finishTime={finishTime} />
            </Typography>
          ) : null}

        </CardContent>
        {bid ? (
          <CardContent sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            backgroundColor: 'gray',
            padding: '5px',
            borderTopLeftRadius: '5px',
          }}
          >
            <Typography sx={{ color: 'white', fontWeight: '500' }}>
              {`Ставка: ${bid} р`}
            </Typography>
          </CardContent>
        ) : null}
        <CardMedia
          component="img"
          image={`${process.env.CONFIG.IMAGES_BASEPATH}${imgUrl}`}
          height="150"
        />
      </Card>
    </Grid>

  );
}

export default AuctionsItem;
