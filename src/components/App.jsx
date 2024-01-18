import NavBar from "./NavBar";
import Hero from "./Hero";
import destinationData from "../utils/destination-data";
import Destinations from "./Destinations";
import Testimonials from "./Testimonials";
import testimonialData from "../utils/testimonial-data";

const App = () => {
  const destinationDatas = destinationData;
  const testimonialDatas = testimonialData;

  return (
    <div>
      <NavBar />
      <Hero />
      <Destinations props={destinationDatas} />
      <Testimonials props={testimonialDatas} />
    </div>
  );
};

export default App;
