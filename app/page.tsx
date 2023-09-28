import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-neutral-200 text-4xl">
          WELCOME TO <span className="font-bold text-teal-400">NEXTJS </span>
          <span className="text-amber-400">SANDBOX</span>
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <Link href="/create-form">
            <button className="flex justify-center items-center p-4 rounded-lg text-neutral-200 bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
              Create Form
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
