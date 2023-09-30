import { ReactNode } from "react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <main className="text-black">
      <h2 className="mb-8 text-2xl font-bold text-center uppercase">{title}</h2>
      <div
        className="grid gap-x-2 gap-y-4"
        style={{
          gridTemplateColumns: "auto minmax(auto, 400px))",
        }}
      >
        {children}
      </div>
    </main>
  )
}
