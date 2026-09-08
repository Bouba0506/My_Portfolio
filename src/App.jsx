import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { Navbar } from "@Components/Navbar";
import Footer from "@Components/Footer";

function App() {
  return (
    <div className="grain relative min-h-screen bg-ink text-bone">
      <a
        href="#home"
        className="sr-only rounded-full bg-crimson px-4 py-2 text-sm font-semibold text-bone focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70]"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
