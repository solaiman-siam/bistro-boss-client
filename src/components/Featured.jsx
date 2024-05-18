import featured from "../../src/assets/home/featured.jpg";
import SectionTitle from "./SectionTitle";

function Featured() {
  return (
    <div className="bg-[url('../../src/assets/home/featured.jpg')] bg-fixed   w-full h-[800px] bg-center bg-cover">
      <div className=" flex bg-[#0000009f] w-full h-full flex-col gap-10 justify-center ">
        <SectionTitle
          subTitle={"From 11:00am to 11:00pm"}
          title={"ORDER ONLINE"}
          color={'white'}
        ></SectionTitle>

        <div className="flex items-center gap-8 max-w-7xl mx-auto px-32 text-white">
          <img className=" w-1/2 flex-1" src={featured} alt="" />
          <div className="flex-1">
            <h3 className="text-2xl pb-2">March 20, 2023</h3>
            <h4 className="text-2xl pb-2">WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              nesciunt eaque commodi iusto reprehenderit blanditiis minima
              architecto nemo totam. Beatae, necessitatibus in sunt facilis vel
              officiis incidunt distinctio ea tenetur quam cumque
            </p>
            <button className="px-4 py-3 border-b-2 rounded-md mt-4 border-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
