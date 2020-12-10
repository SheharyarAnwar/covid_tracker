import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
//import { makeStyles } from "@material-ui/core";

function Index(props) {
  const selectionChanged = (e, v) => {
    props.selectedCountryChanged(v);
  };
  const countries = Object.keys(props.countries);
  return (
    <>
      <Grid item container justify="center" style={{ marginBottom: "3%" }}>
        <Grid item xs={4} sm={2}>
          <Autocomplete
            id="select-on-focus"
            onChange={selectionChanged}
            defaultValue="All"
            disableClearable
            fullWidth={true}
            options={countries}
            selectOnFocus
            renderInput={(params) => <TextField {...params} label="Country" />}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
