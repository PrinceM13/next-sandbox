"use client";

import { useState } from "react";

import QRcode from "qrcode";
import Image from "next/image";

export default function QrCodeGeneratePage() {
  const [qrCode, setQrCode] = useState<string>("");
  const [qrCodeText, setQrCodeText] = useState<string>("");

  const handleGenerateQrCode = async () => {
    const url = await QRcode.toDataURL(qrCodeText || "");
    setQrCode(url);

    // * Clear the input field
    setQrCodeText("");
  };

  const handleDownloadQrCode = () => {
    if (qrCode) {
      const a = document.createElement("a");
      a.href = qrCode;
      a.download = "qr-code.png";
      a.click();
    }
  };

  return (
    <main className="flex justify-center py-32">
      <div className="w-[80%] flex gap-8">
        <section className="flex-[2] flex flex-col gap-8">
          <input
            type="text"
            value={qrCodeText}
            onChange={(e) => setQrCodeText(e.target.value)}
            placeholder="QR Code Text"
            className="w-full p-4 border-2 border-teal-400 rounded-xl text-black focus:outline-none focus:border-teal-500"
          />
          <button
            onClick={handleGenerateQrCode}
            className="w-full p-4 bg-teal-400 rounded-xl text-neutral-200 hover:bg-teal-500"
          >
            Generate QR Code
          </button>
        </section>
        <section className="flex-[1] flex flex-col gap-8">
          <div className="flex justify-center items-center w-full h-[300px] border-2 border-teal-400 rounded-xl">
            {qrCode && <Image src={qrCode} width={256} height={256} alt="QR Code" />}
          </div>

          <button
            onClick={handleDownloadQrCode}
            className="w-full p-4 bg-teal-400 rounded-xl text-neutral-200 hover:bg-teal-500"
            disabled={!qrCode}
          >
            Download QR Code
          </button>
        </section>
      </div>
    </main>
  );
}
