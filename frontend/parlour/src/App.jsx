// // import "./App.css";

// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Intro from "./components/Intro";
// // import Services from "./components/Services";
// // import ServicesInfo from "./components/ServicesInfo";
// // import Show from "./components/Show";
// // import Gallery from "./components/Gallery";
// // import Testimonial from "./components/Testimonial";
// // import Self from "./components/Self";
// // import ShowGrid from "./components/ShowGrid";
// // import Footer from "./components/Footer";

// // function App() {
// //   return (
// //     <div>
// //       <Navbar />
// //       <Hero />
// //       <Intro />
// //       <Services />
// //       <ServicesInfo />
// //       <Show />
// //       <Gallery />
// //       <Testimonial />
// //       <Self />
// //       <ShowGrid />
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Pages
// import Home from "./pages/Home";
// import Gallroid from "./pages/Gallroid";

// function App() {
//   return (
//     <Router>
//       <Navbar /> 
//       {/* Navbar stays on top of every page */}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/gallroid" element={<Gallroid />} />
//       </Routes>

//       <Footer />
//       {/* Footer stays at the bottom of every page */}
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Gallroid from "./pages/Gallroid";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallroid" element={<Gallroid />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
