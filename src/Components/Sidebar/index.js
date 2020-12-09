import React from "react";
import { Box } from "@material-ui/core";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";
import { ReactComponent as Virus } from "../../Assets/Virus.svg";
import style from "./styles";
function Index(props) {
  let styles = style();
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={styles.root}
      >
        <Box
          height={"80%"}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Logo width={80} />
            <Box textAlign="center" component="p">
              Covtrack
            </Box>
          </Box>
          <Box>
            <Virus width={120} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Index;
