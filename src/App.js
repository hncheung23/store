import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { PRODUCT_API as URL_PATH } from "./apiPath";
import axios from "axios";
import Loading from "./components/loading";
import Card from "./components/card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useWindowSize } from "./hooks";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const NUMBER_OF_CARD_DISPLAY = 8

function App() {
  const useStyles = makeStyles((theme) => ({
    gridRoot: {
      flexGrow: 1,
      margin: "3rem",
    },
    paginationRoot: {
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'end'
    },
  }));

  const classes = useStyles();

  const [cards, setCards] = useState([]);

  const [pageCount, setPageCount] = useState(0)
  const size = useWindowSize();
  const [gridSize, setGridSize] = useState({ xs: 6 });
 
  useEffect(() => {
    axios.get(URL_PATH).then((response) => {
      setCards(response.data);
    });
  }, []);

  useEffect(() => {
    setPageCount(Math.ceil(cards.length/NUMBER_OF_CARD_DISPLAY))
  }, [size, cards.length])

  useEffect(() => {
    const { width } = size;
    //     # Mobile
    // only screen and (min-width: 480px)
    // # Tablet
    // only screen and (min-width: 768px)
    // # Desktop
    // only screen and (min-width: 992px)
    // # Huge
    // only screen and (min-width: 1280px)
    if (width < 768) {
      setGridSize({ xs: 12 });
    } else if (width < 992) {
      setGridSize({ xs: 6 });
    } else if (width < 1280) {
      setGridSize({ xs: 3 });
    } else {
      setGridSize({ xs: 3 });
    }
  }, [size]);

  //pagination
  const scrollRef = useRef();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    scrollRef.current.scrollIntoView() 
    setPage(value);
  };
  

  return (
    <div>
      {cards && cards.length === 0 ? (
        <Loading />
      ) : (
        <div className={classes.gridRoot} ref={scrollRef}>
          <Grid container spacing={3}>
            {cards.slice((page - 1) * NUMBER_OF_CARD_DISPLAY, NUMBER_OF_CARD_DISPLAY * page).map((card) => {
              return (
                <Grid item xs={gridSize.xs} key={card.id}>
                  <Card data={card} key={card.id} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
      <div className={classes.paginationRoot}>
        <Typography>Page: {page}</Typography>
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </div>
    </div>
  );
}
export default App;
