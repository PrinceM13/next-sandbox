"use client";

import { useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

import { Mui } from "@/utils";

const CustomCheckbox: React.FC<{
  label?: string;
  value?: boolean;
  isRequire?: boolean;
  onChange?: (isChecked: boolean) => void;
}> = ({ label = "Label", value = false, isRequire = false, onChange = () => {} }) => {
  const [isChecked, setIsChecked] = useState(value);

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <Mui.Theme>
      <FormControlLabel
        required={isRequire}
        control={<Checkbox checked={isChecked} onChange={handleChange} />}
        label={label}
      />
    </Mui.Theme>
  );
};

export default CustomCheckbox;
