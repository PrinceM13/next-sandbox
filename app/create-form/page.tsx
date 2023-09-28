import { Input } from "@/components/base";

export default function CreateFormPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-neutral-200 text-4xl">
          WELCOME TO <span className="font-bold text-teal-400">CREATE FORM</span>
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <ComponentFrame>
            <Input.Dropdown />
          </ComponentFrame>

          <ComponentFrame>
            <Input.Checkbox />
          </ComponentFrame>

          <ComponentFrame>
            <Input.Radio />
          </ComponentFrame>
        </div>
      </div>
    </main>
  );
}

const ComponentFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center items-center p-4 rounded-lg bg-neutral-200">{children}</div>
);
