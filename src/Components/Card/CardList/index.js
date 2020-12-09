import React, { useState } from "react";
import Card from "../index";
import { Grid } from "@material-ui/core";
function Index() {
  const [cardData, setCardData] = useState([
    { name: "Recovered", number: 0 },
    { name: "Infected", number: 0 },
    { name: "Deaths", number: 0 },
  ]);
  const renderedCards = cardData.map((val, i) => {
    return <Card name={val.name} key={i} number={val.number} />;
  });
  return (
    <>
      <Grid item container justify="center" style={{ marginBottom: "4%" }}>
        <Grid item container xs={10} justify="space-evenly" spacing={4}>
          {renderedCards}
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
