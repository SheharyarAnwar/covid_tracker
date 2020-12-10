import { useState, useEffect } from "react";
import { Hidden, Grid, useMediaQuery } from "@material-ui/core";
import Sidebar from "../../Components/Sidebar/index";
import Header from "../../Components/Header/index";
import Dropdown from "../../Components/Dropdown/index";
import CardList from "../../Components/Card/CardList/index";
import Plot from "../../Components/Plot/index";
import style from "./styles";
function Index() {
  const [dimensions, setdimensions] = useState({ width: 320, height: 280 });
  const mdMatch = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const smMatch = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const brMatch = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", window.screen.width * 0.48)
  );
  const match = { mdMatch, smMatch, brMatch };

  useEffect(() => {
    if (brMatch) {
      setdimensions({ width: 280, height: 255 });
    } else {
      setdimensions({ width: 320, height: 280 });
    }
  }, [brMatch]);
  let styles = style(match);
  let headerWidth = smMatch ? 12 : false;
  return (
    <Grid container>
      <Grid item xs={2}>
        <Hidden only={["xs", "sm"]}>
          <Sidebar />
        </Hidden>
      </Grid>
      <Grid item xs={headerWidth}>
        <Hidden only={["md", "lg", "xl"]}>
          <Header />
        </Hidden>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
        className={styles.innerContainer}
        xs={12}
        md={10}
      >
        <Grid item container justify="center" style={{ marginBottom: "3%" }}>
          <Grid item xs={4} sm={2}>
            <Dropdown />
          </Grid>
        </Grid>
        <CardList marginOffset={{ marginBottom: "3%" }} />
        <Grid item>
          <Plot dimensions={dimensions} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Index;
