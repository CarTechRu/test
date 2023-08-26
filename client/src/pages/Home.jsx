import {
  Box,
  Container,
  Divider,
  Typography,
  TextField,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../reducers/update";
import { search } from "../reducers/search";
import Card from "../components/Card";

const pollingInterval = process.env.CONFIG.POLLING_INTERVAL;

const LinkStyle = {
  textDecoration: "none",
  color: "#4B4C48",
};

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [auctions, setAuctions] = useState(null);
  const [loader, setLoader] = useState(false);

  const updateAuctions = useSelector((state) => state.update?.auctions);
  const searchAuctions = useSelector((state) => state.search?.auctions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (auctions?.length > 0) {
      setLoader(true);
    }
  }, [auctions]);

  useEffect(() => {
    //подписка на обновление данных
    const timer = setInterval(() => dispatch(update()), pollingInterval * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    dispatch(search(searchInput));
  }, [searchInput]);

  useEffect(() => {
    if (updateAuctions.length === 0) {
      setAuctions(searchAuctions);
    } else {
      const searchTitle = searchAuctions.map((item) => item.title);
      const currentAuctions = updateAuctions.filter((item) =>
        searchTitle.includes(item.title)
      );

      setAuctions(currentAuctions);
    }
  }, [updateAuctions, searchAuctions]);

  return (
    <Container sx={{ minHeight: "100vh", marginBottom: "100px" }}>
      <Box mb={3}>
        <Typography mb={1}>Поиск по названию</Typography>
        <TextField
          placeholder="Введите текст"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </Box>

      <Box mb={3}>
        <Divider />
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {!loader ? (
          <CircularProgress
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              margin: "auto",
              textAlign: "center",
            }}
          />
        ) : (
          auctions?.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
            <Link
              style={LinkStyle}
              to={"/" + item.id}
            >
              <Card item={item} />
            </Link>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Home;
