import { Parallax } from "react-parallax";
import banner from "../../src/assets/home/chef-service.jpg";

function Banner() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={banner}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="max-w-7xl mx-auto px-32  pb-20">
        <div className="w-full h-[400px] bg-cover bg-center p-20">
          <div className="bg-white/70 backdrop-blur-md flex flex-col justify-center items-center w-full h-full">
            <h2 className="text-3xl pb-4 uppercase">Bistro Boss</h2>
            <p className="text-sm text-black w-8/12 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              fugiat non maxime cupiditate culpa repellendus odio, quidem
              incidunt nostrum modi enim odit commodi, iure aspernatur ratione
              et recusandae! Maiores nulla labore repellat reprehenderit
              reiciendis
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Banner;
