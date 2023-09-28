import Link from "next/link";

export default function CreateFormLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/" className="absolute top-8 left-8">
        <button className="flex justify-center items-center px-4 py-2 rounded-lg font-bold text-sm text-black bg-teal-400 hover:bg-teal-500 active:bg-teal-600">
          Home
        </button>
      </Link>
      {children}
    </>
  );
}
