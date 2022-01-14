import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "./rating";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 500,
  },
  media: {
    height: 170,
    backgroundSize: "32% auto",
  },
  informationBar: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  iconsText: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "1rem",
  },
  cardActionRating: {
    height: 10,
  },
  cardAction: {
    justifyContent: "flex-end",
  },
  titleContentBox: {
    overflow: "auto",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    // WebkitLineClamp: 2,
    // WebkitBoxOrient: "vertical",
    height: 70,
  },
  textContentBox: {
    overflow: "auto",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    // WebkitLineClamp: 5,
    // WebkitBoxOrient: "vertical",
    height: 100,
  },
});

export default function SimpleCard({ data }) {
  const classes = useStyles();
  const { category, description, id, image, price, rating, title } = data;
  const { rate, count } = rating;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="item image" />
        <CardContent>
          <div className={classes.titleContentBox}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </div>

          <div className={classes.textContentBox}>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionRating}>
        <Rating
          rating={rate}
          children={
            <div className={classes.iconsText}>
              <ThumbUpIcon fontSize="small" />
              <div>{count}</div>
            </div>
          }
        />
      </CardActions>
      <CardActions className={classes.cardAction}>
        <div className={classes.informationBar}>
          <div className={classes.iconsText}>
            <AttachMoneyIcon fontSize="small" />
            <div>{price}</div>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
