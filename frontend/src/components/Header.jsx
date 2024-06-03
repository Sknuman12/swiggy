import React, { useState } from "react";
import { RxCaretUp } from "react-icons/rx";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSidemenu = () => {
    setToggle(true);
  };
  const hideSidemenu = () => {
    setToggle(false);
  };

  const links = [
    {
      name: "Search",
    },
    {
      name: "Offer",
      sup:"New"
     
    },
    {
      name: "Help",
    },
    {
      name: "Signin",
    },
    {
      name: "Cart",
      sup:"(0)"
    },
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed decoration-neutral-500 z-[9999]"
        onClick={hideSidemenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[500px] h-full absolute duration-500 z-[9999]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Andheri
            </span>{" "}
            mumbai, maharashtra,India{" "}
            <RxCaretUp
              fontSize={22}
              className="inline text-[#fc8019] cursor-pointer"
              onClick={showSidemenu}
            />
          </div>
          <div className="ml-auto">
            <nav className=" hidden md:flex list-none gap-4 text-[18px]">
              {links.map((link, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className="flex gap-2 items center hover:text-[#fc8019] cursor-pointer"
                    >
                      {link.name}
                      <sup>{link.sup}</sup>
                    </li>
                  </>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
