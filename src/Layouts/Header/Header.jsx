import { NavLink } from "react-router-dom";
import banner from "../../assets/banner.avif";

const Header = () => {
  return (
    <div>
      <img className="w-full h-[11rem]" src={banner} alt="banner" />
      <NavLink to={"/"}>
      <div className="text-4xl text-red-600 -mt-40 mb-[7.4rem] ml-16">IT Technology</div>
      </NavLink>
    </div>
  );
};

export default Header;
