import { Box, Typography, CardMedia, Grid } from "@mui/material";
import moment from "moment";
import { useState, useEffect } from "react";

const imagesBasePath = process.env.CONFIG.IMAGES_BASEPATH;

const TypographyStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const Card = ({ item }) => {
  const { title, bid, finishTime, imgUrl } = item;
  const [isTimeLeft, setIsTimeLeft] = useState(null);

  const now = moment(new Date().toISOString());
  const final = moment(new Date(finishTime).toISOString());
  const diff = final.diff(now, "seconds");
  const totalTime = diff < 0 ? 0 : diff;

  const getPadTime = (time) => time.toString().padStart(2, "0");
  const minutes = getPadTime(Math.floor(isTimeLeft / 60));
  const seconds = getPadTime(Math.floor(isTimeLeft - minutes * 60));

  useEffect(() => {
    setIsTimeLeft(totalTime);
    const timer = setInterval(() => {
      setIsTimeLeft((isTimeLeft) => (isTimeLeft >= 1 ? isTimeLeft - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ bgcolor: "#EEEEEE", position: "relative" }}>
      <Grid
        container
        p={1}
        sx={{
          justifyContent: "space-between",
          flexWrap: "nowrap",
          gap: "10px",
        }}
      >
        <Typography
          style={TypographyStyle}
          sx={{
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <Typography
          style={TypographyStyle}
          sx={{
            textAlign: "right",
            color: "#A19DAB",
          }}
        >
          <Typography variant="span"> {minutes}</Typography>
          <Typography variant="span"> :</Typography>
          <Typography variant="span"> {seconds}</Typography>
        </Typography>
      </Grid>
      <CardMedia
        component="img"
        height="200"
        image={imagesBasePath + imgUrl}
        alt={title}
      />
      <Box
        sx={{ bgcolor: "#A19DAB", position: "absolute", bottom: 0, right: 0 }}
      >
        <Typography
          sx={{
            color: "white",
          }}
          p={1}
        >
          Ставка: {bid}&nbsp;р
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
