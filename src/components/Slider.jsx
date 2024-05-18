import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../src/assets/home/01.jpg";
import img2 from "../../src/assets/home/02.jpg";
import img3 from "../../src/assets/home/03.png";
import img4 from "../../src/assets/home/04.jpg";
import img5 from "../../src/assets/home/05.png";
import img6 from "../../src/assets/home/06.png";

function Slider() {
  return (
    <div className=" max-w-7xl mx-auto  ">
      <Carousel infiniteLoop={true} autoPlay={true}>
        <div className="h-[600px] bg-cover bg-center">
          <img className="w-full h-full" src={img1} />
          <p className=""> </p>
        </div>
        <div className="h-[600px] bg-cover bg-center">
          <img className="w-full h-full" src={img2} />
          <p className=""> </p>
        </div>
        <div className="h-[600px] bg-cover bg-center">
          <img className="w-full h-full" src={img3} />
          <p className=""> </p>
        </div>
        <div className="h-[600px] bg-cover bg-center">
          <img className="w-full h-full" src={img4} />
          <p className=""> </p>
        </div>
        <div className="h-[600px] bg-cover bg-center">
          <img className="w-full h-full" src={img5} />
          <p className=""> </p>
        </div>
        <div className="h-[600px] bg-cover bg-center">
          <img className="w-full h-full" src={img6} />
          <p className=""> </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
