import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound"
import {Navbar} from "@Components/Navbar"
import Footer from "../Components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#080001] h-full w-full ">
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
