import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

function Index() {
  return (
    <>
      <Autocomplete
        id="select-on-focus"
        fullWidth={true}
        options={["new"]}
        selectOnFocus
        renderInput={(params) => (
          <TextField {...params} label="Country" margin="normal" />
        )}
      />
    </>
  );
}

export default Index;
