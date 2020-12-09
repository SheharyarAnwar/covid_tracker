import React from "react";
import { Box } from "@material-ui/core";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";
import style from "./styles";
function Index() {
  let styles = style();
  return (
    <>
      <Box className={styles.root} display="flex" justifyContent="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Logo width={65} />
          <Box component="p">Covtrack</Box>
        </Box>
      </Box>
    </>
  );
}

export default Index;
