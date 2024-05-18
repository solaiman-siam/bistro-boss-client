import image from "../../src/assets/menu/banner3.jpg";
import { Parallax, Background } from "react-parallax";
function PageCover({ title, description, image, small }) {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div style={{}} className={`p-36 w-full h-[550px] `}>
        <div className="bg-black text-white bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
          <h1
            className={`uppercase ${
              small === "small" ? "text-4xl" : ""
            }  tracking-wider text-6xl font-semibold pb-4`}
          >
            {title}
          </h1>
          <h4 className={`uppercase w-8/12 text-sm font-medium text-center`}>
            {description}
          </h4>
        </div>
      </div>
    </Parallax>
  );
}

export default PageCover;
