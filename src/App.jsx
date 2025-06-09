import { Routes,Route } from "react-router"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
    <div className="bg-[#080001] h-full p-4 w-full ">
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
