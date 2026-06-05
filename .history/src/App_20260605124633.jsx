import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;