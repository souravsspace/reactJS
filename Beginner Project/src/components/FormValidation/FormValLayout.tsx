import { ReactNode } from "react"

export default function FormValLayout({ children }: { children: ReactNode }) {
  return (
    
      <main>
        <h1 className="text-center my-4 text-2xl font-mono font-bold tracking-tighter">
          User Details
        </h1>
        <div
          className="grid gap-4 max-w-[25rem] mx-auto border p-6 rounded-md items-center"
          style={{
            gridTemplateColumns: "auto minmax(auto, 400px)",
          }}
        >
          {children}
        </div>
      </main>
  )
}
