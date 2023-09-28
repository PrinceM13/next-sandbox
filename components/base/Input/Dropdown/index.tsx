"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CustomDropdown: React.FC = () => {
  const [dropdown, setDropdown] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDropdown(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel>Dropdown</InputLabel>
        <Select value={dropdown} label="Dropdown" onChange={handleChange} color="primary">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomDropdown;
