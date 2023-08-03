import { useState } from "react";
import { Link } from "react-router-dom";
import { navgation } from "../constants/data";
import { LiaDownloadSolid } from "react-icons/lia";
import logo from "../assets/Images/Logo.svg";
import menu from "../assets/Images/menu.png";
import cross from "../assets/Images/close.png";
const Navigation = () => {
  const [bars, setBars] = useState(false);

  return (
    <>
      <header id="header" className="relative z-[1]">
        <div className="max-w-[1250px] m-auto py-[15px] md:py-[10px] px-[15px] w-[100%] flex flex-row justify-between">
          <div className="logo w-full flexitems-center justify-center max-w-fit">
            <img
              src={logo}
              alt="Logo"
              className=" w-[100%] max-w-[100px] md:max-w-[150px]"
            />
          </div>

          <nav className="flex gap-[15px] w-full items-center justify-end">
            <ul
              className={`w-[100%] flex gap-[15px] max-w-full items-start justify-evenly  absolute  transition-all
            ${bars ? "top-[0]" : "top-[-50vh] "}
              
            right-0 h-[50vh] flex-col px-[15px] bg-black md:relative md:top-0 md:items-center md:flex-row md:bg-transparent
            md:h-auto md:px-0 rounded-br-[28px] rounded-bl-[28px] md:justify-end`}
            >
              {navgation?.map((nav) => (
                <>
                  <Link
                    to={nav.path}
                    key={nav.name}
                    className="font-Space_Grotesk text-#ffffffb3-500 flex items-center justify-center text-[#ffffffb3] md:px-[0.7em] md:py-[1.4em]"
                  >
                    <li className="font-light"> {nav.name}</li>
                  </Link>
                </>
              ))}
            </ul>
            <div className="navigation_button flex flex-row w-full justify-between max-w-fit items-center ">
              <Link
                to={"#"}
                className="rounded-[30px] bg-[white]  flex   py-[0.6em] md:py-[0.7em]  px-[0.7em] shadow-lg text-[15px] md:text-[16px] gap-[10px] font-light"
              >
                <span className="btn_icon mr-2 flex items-center justify-center">
                  <LiaDownloadSolid />
                </span>
                Get the App
              </Link>
            </div>

            <div
              className="md:hidden w-full max-w-[50px]  items-center justify-center px-[8px] flex cursor-pointer  "
              onClick={() => {
                setBars(!bars);
              }}
            >
              {bars ? (
                <img
                  src={cross}
                  alt="Cross"
                  style={{ filter: "invert(1)" }}
                  className="transition-all max-w-[25px]"
                />
              ) : (
                <img
                  src={menu}
                  alt="Menu"
                  style={{ filter: "invert(1)" }}
                  className="transition-all"
                />
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
