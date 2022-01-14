import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default function SimpleRating({ rating, children }) {
  const classes = useStyles();
  return (
    <Box
      component="fieldset"
      mb={3}
      borderColor="transparent"
      style={{ marginBottom: 0, alignItems: "center", display: 'flex' }}
    >
      <div className={classes.root}>
        <Typography component="legend">{rating}</Typography>
        <Rating name="read-only" value={rating} readOnly precision={0.1} />
      </div>
      {children}
    </Box>
  );
}
