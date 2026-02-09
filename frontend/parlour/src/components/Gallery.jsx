import "../App.css";
import { Link } from "react-router-dom";
import GalleryImages from "./GalleryImages";
function Gallery() {
  return (
    <div id="gallery" className="bg-[#FFFBF3] p-25 h-fit w-full text-center">
      <div className="text-4xl font-light">FEATURED GALLERY</div>
      <p className="text-[#543E33] light bg-transparent text-xl my-10 font-light">
        Here are some of our featured gallery images.
      </p>
      <GalleryImages />
      <div>
        <button className="border light border-[#543E33] text-[#543E33]  bg-transparent text-xl px-8 py-3 font-light hover:bg-[#543E33] hover:text-white transition-colors duration-300    ">
          <Link to="/gallroid" onClick={() => setIsOpen(false)}>
            See Gallery
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
