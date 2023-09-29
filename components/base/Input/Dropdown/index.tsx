"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Mui } from "@/utils";
import { IDropdown } from "@/interfaces/component";

const initialDropdown: IDropdown = {
  label: "Dropdown",
  options: [
    { label: "Option 1", value: "option-1" },
    { label: "Option 2", value: "option-2" },
    { label: "Option 3", value: "option-3" }
  ]
};

const CustomDropdown: React.FC<{
  size?: number;
  label?: string;
  value?: string;
  options?: { label: string; value: string }[];
  onChange?: (value: string) => void;
}> = ({
  size = 150,
  label = initialDropdown.label,
  value = initialDropdown.options[0].value,
  options = initialDropdown.options,
  onChange = () => {}
}) => {
  const [selected, setSelected] = useState<string>(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
    onChange(event.target.value as string);
  };

  return (
    <Mui.Theme>
      <Box sx={{ minWidth: size }}>
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select value={selected} label={label} onChange={handleChange} color="primary">
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Mui.Theme>
  );
};

export default CustomDropdown;
