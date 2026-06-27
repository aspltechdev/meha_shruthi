import { FaWhatsapp } from "react-icons/fa";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Home />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9442657611"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </>
  );
}

export default App;