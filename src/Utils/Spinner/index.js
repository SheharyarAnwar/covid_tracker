import React, { useRef, useEffect } from "react";
import { Box, useTheme } from "@material-ui/core";
import { ReactComponent as Virus } from "../../Assets/Virus.svg";
import classes from "./index.module.css";
function Index() {
  const theme = useTheme();
  const styles = {
    backgroundColor: theme.palette.orange,
  };
  return (
    <>
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles}
      >
        <Virus width={120} className={classes.animation} />
      </Box>
    </>
  );
}

export default Index;
