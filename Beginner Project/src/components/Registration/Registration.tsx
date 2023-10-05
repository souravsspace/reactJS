import { Route, Routes } from "react-router-dom"
import { Signin } from "./Signin"
import { Signup } from "./Signup"
import { Toaster } from "@/components/ui/toaster"

export default function Registration() {
  return (
    <main className="mx-auto">
      <div className="max-w-[25rem] mx-auto border p-6 rounded-md">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </div>
      <Toaster />
    </main>
  )
}
