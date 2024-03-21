import React from "react";
import Arrow from "../assets/images/Arrow.png";
import Logo from "../assets/images/Icon.png";
import Logoname from "../assets/images/QuillAudits.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute w-full z-10 top-[24px]">
      <div className="container mx-auto px-5 md:px-0">
      <div className="flex justify-between items-center py-6">
          <div className="text-white text-xl font-bold inline-flex flex-row items-center gap-4">
            <img src={Logo} alt="logo" className="h-[42.84px] w-[45.52px]" />
            <img
              src={Logoname}
              alt="logoname"
              className="hidden md:flex h-[21.42px] w-[157.97px]"
            />
          </div>
          <div className="md:flex hidden items-center gap-4">
            <ul className="flex text-[21px] font-400 font-jost">
              <li className="ml-4 relative group">
                <div className="text-white flex items-center gap-2">
                  <span>Service</span>
                  <img src={Arrow} alt="arrow" className="h-2 w-3" />
                </div>
              </li>
              <li className="ml-4 text-white">Pricing</li>
              <li className="ml-4 text-white">Our Audits</li>
              <li className="ml-4 relative group">
                <div className="text-white flex items-center gap-2">
                  <span>Tools</span>
                  <img src={Arrow} alt="arrow" className="h-2 w-3" />
                </div>
              </li>
              <li className="ml-4 relative group">
                <div className="text-white flex items-center gap-2">
                  <span>Resources</span>
                  <img src={Arrow} alt="arrow" className="h-2 w-3" />
                </div>
              </li>
              <li className="ml-4 text-white">Refer-Earn-Recure</li>
            </ul>
          </div>
          <Button text="Request An Audits" />
          <div className="flex md:hidden items-center">
                <RxHamburgerMenu className="text-white h-7 w-7" />
          </div>
      </div>
      <hr className="hidden md:flex border-b border-gray-600" />
      </div>
    </nav>
  );
};

export default Navbar;
