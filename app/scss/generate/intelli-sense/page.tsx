"use client";

import { useEffect, useState } from "react";

import { generates } from "@/utils";

export default function GenerateIntelliSensePage(): JSX.Element {
  const [brand, setBrand] = useState<string>("");
  const [snippet, setSnippet] = useState<string>("");

  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  const onCopy = () => {
    navigator.clipboard.writeText(snippet);
    setIsCopied(true);
  };

  const onRegenerate = () => {
    const snippet = generates.snippets.margin({
      brand,
      values: [
        0,
        1,
        2,
        4,
        8,
        12,
        16,
        24,
        32,
        48,
        64,
        128,
        256,
        512,
        "50pct",
        "100pct",
        "100vw",
        "100vh",
        "auto"
      ]
    });

    setSnippet(snippet);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[75%] max-w-[800px] min-h-screen m-auto gap-8">
        <div className="text-3xl">Generate IntelliSense Snippet Code</div>
        <div className="flex gap-4">
          <label className="px-4 py-3 rounded-lg border-2 border-neutral-400 text-teal-400">
            Brand:{" "}
            <input
              className="rounded-lg px-3 bg-neutral-400 text-black"
              placeholder="type your brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
          <div
            className="px-2 flex items-center rounded-lg cursor-pointer border-2 border-teal-400 hover:bg-teal-700 active:bg-teal-600 font-bold text-teal-400"
            onClick={onRegenerate}
          >
            generate snippet code
          </div>
        </div>

        <div className="py-12 rounded-xl bg-neutral-800">
          <pre className="px-20 max-h-[400px] overflow-y-auto rounded-xl bg-neutral-800">
            {snippet ? snippet : "Please type your brand and click on generate button."}
          </pre>
        </div>

        <div
          className="p-2 rounded-lg cursor-pointer border-2 border-amber-500 hover:bg-amber-800 active:bg-amber-700 font-bold text-amber-500"
          onClick={onCopy}
        >
          copy to your clipboard
        </div>
      </div>

      {/* toast */}
      {isCopied && (
        <div className="absolute bottom-10 left-10 px-4 py-2 rounded-lg animate-bounce bg-amber-400 text-sm text-black">
          The snippet code has been copied to your clipboard.
        </div>
      )}
    </>
  );
}
