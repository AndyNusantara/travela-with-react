import NavBar from "./NavBar";
import Hero from "./Hero";
import destinationData from "../utils/destination-data";
import Destinations from "./Destinations";
import Testimonials from "./Testimonials";
import testimonialData from "../utils/testimonial-data";
import Newsletter from "./Newsletter";

const App = () => {
  const destinationDatas = destinationData;
  const testimonialDatas = testimonialData;

  return (
    <div>
      <NavBar />
      <Hero />
      <Destinations props={destinationDatas} />
      <Testimonials props={testimonialDatas} />
      <Newsletter />
    </div>
  );
};

export default App;
