"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

import QRcode from "qrcode";
import BestColorPicker from "react-best-gradient-color-picker";

import { useClickOutside } from "@/hooks";

function rgbaToHex(rgba: string): string {
  // Parse the RGBA components
  const rgbaValues = rgba.match(/\d+/g);

  // Ensure rgbaValues is not null and contains 4 components (R, G, B, A)
  if (rgbaValues && rgbaValues.length === 4) {
    // Convert each component to hex
    const hexValues = rgbaValues.map((value) => {
      const hex = parseInt(value).toString(16);
      return hex.length === 1 ? "0" + hex : hex; // Add leading zero if needed
    });

    // Concatenate the hex values and return
    return "#" + hexValues.slice(0, 3).join(""); // Exclude alpha component
  }

  return ""; // Return empty string if RGBA format is invalid
}

export default function QrCodeGeneratePage() {
  const [qrCode, setQrCode] = useState<string>("");
  const [qrCodeText, setQrCodeText] = useState<string>("");

  const [qrCodeOptions, setQrCodeOptions] = useState<{
    type: "image/png";
    width: number;
    height: number;
    margin: number;
    color: {
      dark: string;
      light: string;
    };
  }>({
    type: "image/png",
    margin: 1,
    width: 2048,
    height: 2048,
    color: {
      dark: "#000", // "#00307D",
      light: "#FFF" //"#B8E8F7"
    }
  });

  const handleGenerateQrCode = useCallback(async () => {
    if (qrCodeText) {
      const url = await QRcode.toDataURL(qrCodeText || "", qrCodeOptions);
      setQrCode(url);

      // * Clear the input field
      // setQrCodeText("");
    } else {
      setQrCode("");
    }
  }, [qrCodeText, qrCodeOptions]);

  const handleDownloadQrCode = () => {
    if (qrCode) {
      const a = document.createElement("a");
      a.href = qrCode;
      a.download = "qr-code.png";
      a.click();
    }
  };

  return (
    <main className="flex justify-center py-12 md:py-32 min-h-screen">
      <div className="w-[80%] flex gap-8 flex-col md:flex-row">
        <section className="flex-[2] flex flex-col gap-8">
          <button
            onClick={handleGenerateQrCode}
            className="w-full p-4 bg-teal-400 rounded-xl text-neutral-200 hover:bg-teal-500"
            disabled={!qrCodeText}
            style={{
              cursor: qrCodeText ? "pointer" : "not-allowed",
              opacity: qrCodeText ? 1 : 0.3
            }}
          >
            Generate QR Code
          </button>

          <input
            type="text"
            value={qrCodeText}
            onChange={(e) => setQrCodeText(e.target.value)}
            placeholder="QR Code Text"
            className="w-full p-4 border-2 border-teal-400 rounded-xl text-black focus:outline-none focus:border-teal-500"
          />

          <section className="grid grid-cols-2 gap-x-4 gap-y-8">
            <label className="flex flex-col gap-2">
              <span>QR Size (px)</span>
              <input
                type="number"
                value={qrCodeOptions.width}
                onChange={(e) =>
                  setQrCodeOptions({
                    ...qrCodeOptions,
                    width: Number(e.target.value),
                    height: Number(e.target.value)
                  })
                }
                className="w-full p-4 border-2 border-teal-400 rounded-xl text-black focus:outline-none focus:border-teal-500"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span>QR Margin (px)</span>
              <input
                readOnly
                type="number"
                value={qrCodeOptions.margin}
                className="w-full cursor-not-allowed p-4 border-2 border-teal-400 rounded-xl text-black focus:outline-none focus:border-teal-500"
              />
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={qrCodeOptions.margin}
                onChange={(e) =>
                  setQrCodeOptions({
                    ...qrCodeOptions,
                    margin: Number(e.target.value)
                  })
                }
                className="w-full cursor-pointer"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span>Dark Color</span>
              <ColorPicker
                color={qrCodeOptions.color.dark}
                onChange={(color: string) =>
                  setQrCodeOptions({
                    ...qrCodeOptions,
                    color: { ...qrCodeOptions.color, dark: rgbaToHex(color) }
                  })
                }
              />
            </label>

            <label className="flex flex-col gap-2">
              <span>Light Color</span>
              <ColorPicker
                color={qrCodeOptions.color.light}
                onChange={(color: string) =>
                  setQrCodeOptions({
                    ...qrCodeOptions,
                    color: { ...qrCodeOptions.color, light: rgbaToHex(color) }
                  })
                }
              />
            </label>
          </section>
        </section>

        <section className="flex-[1] flex flex-col gap-8">
          <div className="flex justify-center items-center w-full h-[300px] border-2 border-teal-400 rounded-xl">
            {qrCode && <Image src={qrCode} width={256} height={256} alt="QR Code" />}
          </div>

          <button
            onClick={handleDownloadQrCode}
            className={"w-full p-4 bg-amber-400 rounded-xl text-neutral-200 hover:bg-amber-500"}
            disabled={!qrCode}
            style={{ cursor: !qrCode ? "not-allowed" : "pointer", opacity: !qrCode ? 0.3 : 1 }}
          >
            Download QR Code
          </button>
        </section>
      </div>
    </main>
  );
}

function ColorPicker({ color, onChange }: { color: string; onChange: (color: string) => void }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-14 rounded-lg border-2 border-teal-400 cursor-pointer"
        style={{ backgroundColor: color }}
      />
      {isOpen && (
        <div
          ref={ref}
          className="rounded-xl bg-neutral-100 p-4 absolute z-10 -top-10 md:top-auto md:-bottom-20 left-0"
        >
          <BestColorPicker value={color} onChange={onChange} hideColorTypeBtns />
        </div>
      )}
    </div>
  );
}
