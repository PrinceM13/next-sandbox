"use client";

import { useState } from "react";
import { Button, TextField } from "@mui/material";

import { Mui } from "@/utils";
import { Svgs } from "@/assets";
import { Input } from "@/components/base";
import { IDropdown } from "@/interfaces/component";

const initialDropdown: IDropdown = {
  label: "Dummy",
  options: [
    { label: "Option 1", value: "option-1" },
    { label: "Option 2", value: "option-2" },
    { label: "Option 3", value: "option-3" }
  ]
};

export default function FormDemo() {
  const [isDropdownChecked, setIsDropdownChecked] = useState<boolean>(false);
  const [dropdowns, setDropdowns] = useState<IDropdown[]>([
    {
      label: initialDropdown.label,
      options: [...initialDropdown.options].map((option) => ({ ...option }))
    }
  ]);
  const [dropdown, setDropdown] = useState<IDropdown>({
    label: initialDropdown.label,
    options: [...initialDropdown.options].map((option) => ({ ...option }))
  });

  const handleSubmit = () => {
    setDropdowns([...dropdowns, dropdown]);
    setIsDropdownChecked(false);
    setDropdown({
      label: initialDropdown.label,
      options: [...initialDropdown.options].map((option) => ({ ...option }))
    });
  };

  const handleDropdownChange = (value: string, index: number) => {
    if (value === "") {
      const newOptions = [...dropdown.options];
      newOptions.splice(index, 1);
      setDropdown({ ...dropdown, options: newOptions });
    } else {
      const newOptions = [...dropdown.options];
      newOptions[index].label = value;
      newOptions[index].value = value;
      setDropdown({ ...dropdown, options: newOptions });
    }
  };

  return (
    <main className="flex justify-center py-32">
      <div className="w-[80%] flex gap-8">
        <section className="flex-[2]">
          <div className="grid grid-cols-3 gap-4 rounded-xl border-2 border-teal-400 p-8">
            {dropdowns.map((dropdown, index) => (
              <Input.Dropdown
                key={index}
                value=""
                label={dropdown.label}
                options={dropdown.options}
              />
            ))}
          </div>
        </section>

        <section className="flex-1 flex flex-col gap-4 rounded-xl p-8 border-2 border-dashed border-neutral-200">
          <Mui.Theme>
            <Input.Checkbox
              label="Add Dropdown"
              value={isDropdownChecked}
              onChange={(value) => setIsDropdownChecked(value)}
            />
            {isDropdownChecked && (
              <div className="flex flex-col gap-4 border-2 border-teal-400 p-4 rounded-lg">
                <TextField
                  id="outlined-controlled"
                  label="Dropdown Label"
                  value={dropdown.label}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDropdown({ ...dropdown, label: event.target.value });
                  }}
                />
                {dropdown.options.map((option, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Svgs.Icon.ArrowRight color="#ffffff" />
                    <TextField
                      id="outlined-controlled"
                      label="Option Label"
                      value={option.value}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleDropdownChange(event.target.value, index)
                      }
                    />
                  </div>
                ))}

                <Svgs.Icon.AddCircle
                  color="#fbbf24"
                  size={32}
                  isActive={true}
                  className="self-center"
                  onClick={() =>
                    setDropdown({
                      ...dropdown,
                      options: [...dropdown.options, { label: "new option", value: "new option" }]
                    })
                  }
                />
              </div>
            )}
            {/* <Input.Checkbox label="Add Checkbox" /> */}
            {/* <Input.Checkbox label="Add Radio" /> */}
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </Mui.Theme>
        </section>
      </div>
    </main>
  );
}
