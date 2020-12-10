import { useState, useEffect } from "react";
import { Grid, useMediaQuery } from "@material-ui/core";

//Components
import Sidebar from "../../Components/Sidebar/index";
import Header from "../../Components/Header/index";
import Dropdown from "../../Components/Dropdown/index";
import CardList from "../../Components/Card/CardList/index";
import Plot from "../../Components/Plot/index";
import axios from "axios";
import style from "./styles";
function Index() {
  const [countries, setCountries] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [dataSet, setDataSet] = useState([]);
  useEffect(() => {
    const fetchAndSetData = async () => {
      const { data } = await axios.get(
        "https://corona.lmao.ninja/v2/countries?yesterday&sort"
      );
      const total = await axios.get(
        "https://corona.lmao.ninja/v2/all?yesterday"
      );
      const countriesObj = {};
      countriesObj["All"] = { ...total.data };
      data.map((val) => {
        return (countriesObj[val.country] = { ...val });
      });
      setCountries(countriesObj);
      setDataSet(makeDataset(countriesObj[selectedCountry]));
    };
    fetchAndSetData();
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
