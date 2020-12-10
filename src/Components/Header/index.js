import React from "react";
import { Box, Grid, Hidden } from "@material-ui/core";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";
import style from "./styles";
function Index({ smMatch }) {
  let styles = style();
  let headerWidth = smMatch ? 12 : false;
  return (
    <>
      <Grid item xs={headerWidth}>
        <Hidden only={["md", "lg", "xl"]}>
          <Box className={styles.root} display="flex" justifyContent="center">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Logo width={65} />
              <Box component="p">Covtrack</Box>
            </Box>
          </Box>
        </Hidden>
      </Grid>
    </>
  );
}

export default Index;
