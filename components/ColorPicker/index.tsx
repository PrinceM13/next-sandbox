"use client";

import { useState } from "react";
import BestColorPicker from "react-best-gradient-color-picker";

import * as state from "@/stores/valtio";
import { useSnapshot } from "valtio";
import { Svgs } from "@/assets";
import { useClickOutside } from "@/hooks";

const ColorPicker: React.FC = () => {
  const primay = useSnapshot(state.theme).primary;

  const ref = useClickOutside(() => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(primay);

  const handleColorChange = (color: string) => {
    setColor(color);
    state.theme.primary = color;
  };

  return (
    <>
      {isOpen ? (
        <div ref={ref} className="rounded-lg bg-neutral-100 p-4 relative z-10">
          <BestColorPicker value={color} onChange={handleColorChange} hideColorTypeBtns />
        </div>
      ) : (
        <Svgs.Icon.ColorPicker onClick={() => setIsOpen(true)} isActive={true} size={32} />
      )}
    </>
  );
};

export default ColorPicker;
