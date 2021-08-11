import React from "react";
import Image from "./Image";
import { Grid } from "@material-ui/core";

const Images = ({ data }) => {
  return (
    <Grid container>
      {data.map((image) => (
        <Grid item xs={3} key={image.id}>
          <Image image={image.largeImageURL} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Images;
