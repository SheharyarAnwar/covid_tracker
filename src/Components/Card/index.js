import React from "react";
import { Paper, Grid } from "@material-ui/core";
import style from "./styles";
function Index({ name, number }) {
  let styles = style({ name });
  return (
    <>
      <Grid item>
        <Paper elevation={0} className={styles.root}>
          <h4>{name}</h4>
          <p>{number}</p>
        </Paper>
      </Grid>
    </>
  );
}

export default Index;
