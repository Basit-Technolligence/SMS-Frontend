import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export default function OutlinedCard({ padding, children }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ padding }} variant="outlined">
      {children}
    </Card>
  );
}
