import { Button, Slider } from "@mui/material";
import React from "react";

export const MyForm = () => {
  return (
    <div>
      <h1>General Styles</h1>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} color="secondary" />
      <Button variant="contained" color="primary">
        contained primary
      </Button>
      <Button variant="contained" color="secondary">
        contained secondary
      </Button>
      <Button variant="outlined" color="primary">
        outlined primary
      </Button>
      <Button variant="outlined" color="secondary">
        outlined secondary
      </Button>
    </div>
  );
};
