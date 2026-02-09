import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <div className="border-2 border-[#543E33] lg:border-0 h-45 lg:h-25 flex flex-col text-center py-6 px-7 lg:px-20 relative bg-[#FFFBF3] ">
        <div className="w-full h-full flex items-center justify-between bg-transparent">
          <div
            className="menu cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button className="border border-[#543E33] text-[#543E33] bg-transparent text-lg px-9 py-1.5 font-light hover:bg-[#543E33] hover:text-white transition-colors duration-300">
            <a href="#contact">Contact</a>
          </button>
        </div>
        <h2 className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-2xl text-[#543E33]">
          BLUSHING POINT
        </h2>
      </div>

      {/* FULL SCREEN MENU */}
      <div
        className={`z-50 fixed inset-0 bg-[#543E33] text-white flex flex-col justify-center items-center transition-transform transition-opacity duration-500 ease-in-out p-9
        ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-[200%] opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center h-full w-[70%] gap-12">
          <div className="pb-10 border-b w-full flex justify-center">
            <div
              onClick={() => setIsOpen(false)}
              className="menu-close cursor-pointer"
            >
              <span></span>
              <span></span>
            </div>
          </div>
          {/* All links are now regular anchors */}
          <div className="text-lg font-light lg:text-xl">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </div>
          <div className="text-lg font-light lg:text-xl">
            {/* <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a> */}
            <Link to="/gallroid" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </div>
          <div className="text-lg font-light lg:text-xl">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </div>
          <div className="text-lg font-light lg:text-xl">
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </div>
          <div className="text-lg font-light lg:text-xl">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
