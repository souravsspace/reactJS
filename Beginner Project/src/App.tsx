import { ModeToggle } from "./components/ThemeProvider/ModeToggle"
import Registration from "./css/Registration/Registration"

export default function App() {
  return (
    <>
      <ModeToggle />
      <div className="p-8">
        <Registration />
      </div>
    </>
  )
}
