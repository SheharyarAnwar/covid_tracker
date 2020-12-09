//import { useEffect } from "react";
import { Hidden, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Sidebar from "../../Components/Sidebar/index";
import Header from "../../Components/Header/index";
import Dropdown from "../../Components/Dropdown/index";
import CardList from "../../Components/Card/CardList/index";
import Plot from "../../Components/Plot/index";
import style from "./styles";
function Index() {
  const mdMatch = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const smMatch = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const brMatch = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", window.screen.width * 0.48)
  );
  const theme = useTheme();
  const match = { mdMatch, smMatch, brMatch };
  /*  window.addEventListener("resize", () => {
    console.log("brMatch:", brMatch, "smMatch:", smMatch, "mdMatch:", mdMatch);
  }); */
  console.log(window.screen.width * 0.48);
  let marginOffset = mdMatch ? { marginBottom: "5%" } : { marginBottom: "5%" };
  let styles = style(match);
  let headerWidth = smMatch ? 12 : 0;
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
        <Grid item container justify="center" style={marginOffset}>
          <Grid item xs={4} sm={2}>
            <Dropdown />
          </Grid>
        </Grid>
        <CardList marginOffset={marginOffset} />
        <Grid item style={{ margin: brMatch ? "8%" : null }}>
          <Plot />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Index;
