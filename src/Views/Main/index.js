import { useState, useEffect } from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
//Utils
//Components
import Sidebar from "../../Components/Sidebar/index";
import Header from "../../Components/Header/index";
import Dropdown from "../../Components/Dropdown/index";
import CardList from "../../Components/Card/CardList/index";
import Plot from "../../Components/Plot/index";
import style from "./styles";
function Index(props) {
  const resource = props.apiData;
  const countriesObj = resource.countries.read();
  const [countries, setCountries] = useState(countriesObj);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [dataSet, setDataSet] = useState([]);
  useEffect(() => {
    setDataSet(makeDataset(countries[selectedCountry]));
  }, []);
  const makeDataset = (val) => {
    const ar = [];
    ar[0] = val.recovered;
    ar[1] = val.cases;
    ar[2] = val.deaths;
    return ar;
  };
  const selectedCountryChanged = (val) => {
    setSelectedCountry(val);
    setDataSet(makeDataset(countries[val]));
  };
  const mdMatch = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const smMatch = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const brMatch = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", 656)
  );
  const match = { mdMatch, smMatch, brMatch };
  let canvasStyles = {
    position: "relative",
    width: brMatch ? 280 : 320,
    height: brMatch ? 255 : 280,
    marginBottom: brMatch ? "3%" : 0,
  };
  let styles = style(match);

  return (
    <Grid container>
      <Sidebar />
      <Header smMatch={smMatch} />
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
        <Dropdown
          selectedCountryChanged={selectedCountryChanged}
          countries={countries}
        />
        <CardList dataSet={dataSet} marginOffset={{ marginBottom: "3%" }} />
        <Grid item style={canvasStyles}>
          <Plot dataSet={dataSet} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Index;
