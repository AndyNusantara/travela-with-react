import NavBar from "./NavBar";
import Hero from "./Hero";
import Data from "../utils/data";
import Destinations from "./Destinations";

const App = () => {
  const Datas = Data;

  return (
    <div>
      <NavBar />
      <Hero />
      <Destinations props={Datas} />
    </div>
  );
};

export default App;
