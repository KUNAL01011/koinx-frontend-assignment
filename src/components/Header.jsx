import React, { useState } from "react";
import navigation from "../constant/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <div className="w-[90%] h-[80px] m-auto flex justify-between items-center border-b-2">
        {/* logo */}
        <div>
          <img src="/assets/logo.svg" alt="logo" className="h-1/2" />
        </div>
        {/* menu section */}
        <div className="hidden md:flex gap-8 items-center">
          {navigation.map((item, index) => (
            <div key={index}>
              <p className="font-bold text-[#0F1629] text-[16px]">
                {item.title}
              </p>
            </div>
          ))}
          {/* button */}
          <button className="bg-custom-gradient px-3 py-2 rounded-lg text-white font-bold">
            Get Started
          </button>
        </div>
        {/* menu icon */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} aria-label="Menu Toggle">
            {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full border-t-2">
          <div className="flex flex-col items-center gap-4 py-4">
            {navigation.map((item, index) => (
              <div key={index}>
                <p className="font-bold text-[#0F1629] text-[16px]">
                  {item.title}
                </p>
              </div>
            ))}
            <button className="bg-custom-gradient px-3 py-2 rounded-lg text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
