import Link from "next/link";

import { ColorPicker } from "@/components";

export default function CreateFormLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute top-8 left-8 flex gap-4">
        <Link href="/">
          <button className="flex justify-center items-center px-4 py-2 rounded-lg font-bold text-sm text-black bg-teal-400 hover:bg-teal-500 active:bg-teal-600">
            Home
          </button>
        </Link>
      </div>
      <div className="absolute top-8 right-8">
        <ColorPicker />
      </div>
      {children}
    </>
  );
}
