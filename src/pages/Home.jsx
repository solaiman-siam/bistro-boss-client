import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Featured from "../components/Featured";
import Menu from "../components/Menu";
import Recommended from "../components/Recommended";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Slider></Slider>
      <Category></Category>
      <Banner></Banner>
      <Menu></Menu>
      <Recommended></Recommended>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
}

export default Home;
