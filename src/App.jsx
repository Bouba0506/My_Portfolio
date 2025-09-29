import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Navbar } from "./Components/navbar";

function App() {
  return (
    <>
      <div className="bg-[#080001] h-full p-4 w-full ">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
