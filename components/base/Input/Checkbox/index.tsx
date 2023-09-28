"use client";

import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const CustomCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox checked={!isChecked} />} label="Label" />
      <FormControlLabel
        required
        control={<Checkbox checked={isChecked} onChange={handleChange} />}
        label="Required"
      />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
};

export default CustomCheckbox;
