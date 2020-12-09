import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
//import { makeStyles } from "@material-ui/core";

function Index() {
  return (
    <>
      <Autocomplete
        id="select-on-focus"
        fullWidth={true}
        options={["new"]}
        selectOnFocus
        renderInput={(params) => <TextField {...params} label="Country" />}
      />
    </>
  );
}

export default Index;
