// src/pages/Home.jsx
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import ServicesInfo from "../components/ServicesInfo";
import Show from "../components/Show";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import Self from "../components/Self";
import ShowGrid from "../components/ShowGrid";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <ServicesInfo />
      <Show />
      <Gallery />
      <Testimonial />
      <Self />
      <ShowGrid />
    </>
  );
};

export default Home;