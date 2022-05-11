import { Button, Slider } from "@mui/material";
import React from "react";

export const MyForm = () => {
  return (
    <div>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} color="secondary" />
      <Button variant="contained" color="primary">
        button
      </Button>
    </div>
  );
};
