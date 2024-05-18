import { Avatar } from "flowbite-react";
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#151515b2] py-3 w-full fixed z-50 ">
      <div className=" w-full left-0  h-full flex justify-between   items-center max-w-screen-xl lg:px-14 mx-auto md:px-10 px-6 text-gray-50">
        <div className="flex left-0 flex-col items-center ">
          <h1 className="text-[25px] font-bold leading-none">Bistro Boss</h1>
          <p className="uppercase tracking-[4px] font-semibold text-sm ">
            Restaurent
          </p>
        </div>
        <div className="flex gap-10 =  ">
          <ul className="uppercase  items-center flex gap-5 text-[12px] font-semibold text-white">
            <NavLink className="hover:text-yellow-400 transition-all duration-100">
              Home
            </NavLink>
            <NavLink className="hover:text-yellow-400 transition-all duration-100">
              Contact
            </NavLink>
            <NavLink className="hover:text-yellow-400 transition-all duration-100">
              Dashboard
            </NavLink>
            <NavLink
              to={"/our-menu"}
              className="hover:text-yellow-400 transition-all duration-100"
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/order/salad"
              className="hover:text-yellow-400 transition-all duration-100"
            >
              Our Shop
            </NavLink>
          </ul>
          <div className="flex gap-4 items-center">
            <span>
              <IoMdCart size={25} />
            </span>
            <button>Sign In</button>
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              alt="User"
              rounded
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
