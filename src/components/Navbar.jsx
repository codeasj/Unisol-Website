import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeLogo, setActiveLogo] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#EEF0F2] lg:bg-white  w-full lg:h-24 sticky top-0 z-50 border-b border-2">
      <div className="flex lg:items-center justify-between lg:py-3">
        <div className="flex-[1] flex lg:justify-center pl-5 lg:pl-0 items-center">
          {(activeLogo === "home" || activeLogo === "/") && (
            <img
              src="/assets/svg/unisol-logo.svg"
              alt="logo"
              className="w-20 lg:w-28 xl:w-32"
            />
          )}
          {activeLogo === "health-care" && (
            <img
              src="/assets/svg/surgisol-logo.svg"
              alt="logo"
              className="w-28 xl:w-32"
            />
          )}
          {activeLogo === "waste-management" && (
            <img
              src="/assets/svg/enviro-logo.svg"
              alt="logo"
              className="w-28 xl:w-32"
            />
          )}
          {activeLogo === "startup-project" && (
            <img
              src="/assets/svg/ignite-logo.svg"
              alt="logo"
              className="w-28 h-16 xl:w-32"
            />
          )}
        </div>

        <div className="flex-[4] hidden lg:block">
          <ul className="flex gap-5 justify-center items-center text-lg">
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="w-20 xl:w-24 h-9"></div>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                  onClick={() => setActiveLogo("home")}
                >
                  Home
                </NavLink>
              </li>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center">
              <img
                src="/assets/svg/surgisol-logo.svg"
                alt="logo"
                className="hidden lg:block w-20 xl:w-24 h-9"
              />

              <li>
                <NavLink
                  to="/health-care"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                  onClick={() => setActiveLogo("health-care")}
                >
                  <div className="flex gap-1 items-center">
                    <span className="lg:text-base xl:text-lg">Healthcare</span>
                    <span className="lg:text-base xl:text-lg mt-[2px]">
                      <GoPlus />
                    </span>
                  </div>
                </NavLink>
              </li>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center">
              <img
                src="/assets/svg/enviro-logo.svg"
                alt="logo"
                className="hidden lg:block w-20 xl:w-24 h-9"
              />

              <li>
                <NavLink
                  to="/waste-management"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                  onClick={() => setActiveLogo("waste-management")}
                >
                  <div className="flex gap-1 items-center">
                    <span className="lg:text-base xl:text-lg whitespace-nowrap">
                      Waste Management
                    </span>
                    <span className="lg:text-base xl:text-lg mt-[2px]">
                      <GoPlus />
                    </span>
                  </div>
                </NavLink>
              </li>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center">
              <img
                src="/assets/svg/ignite-logo.svg"
                alt="logo"
                className="hidden lg:block w-20 xl:w-24 h-9"
              />
              <li>
                <NavLink
                  to="/startup-project"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                  onClick={() => setActiveLogo("startup-project")}
                >
                  <div className="flex gap-1 items-center">
                    <span className="lg:text-base xl:text-lg whitespace-nowrap">
                      Startup Project
                    </span>
                    <span className="lg:text-base xl:text-lg mt-[2px]">
                      <GoPlus />
                    </span>
                  </div>
                </NavLink>
              </li>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="hidden lg:block w-20 xl:w-24 h-9"></div>

              <li>
                <NavLink
                  to="/hospitality/assetManagement"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                  onClick={() => setActiveLogo('/')}
                >
                  <div className="flex-1 flex gap-1 items-center">
                    <span className="lg:text-base xl:text-lg">Hospitality</span>
                    <span className="lg:text-base xl:text-lg mt-[2px]">
                      <GoPlus />
                    </span>
                  </div>
                </NavLink>
              </li>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="w-20 xl:w-24 h-9"></div>
              <li>
                <NavLink
                  to="/our-inspiration"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                  onClick={() => setActiveLogo('/')}
                >
                  <span className="whitespace-nowrap lg:text-base xl:text-lg">
                    Our Inspiration
                  </span>
                </NavLink>
              </li>
            </div>
          </ul>
        </div>

        <div className="lg:flex-[1]  flex  items-center  justify-around">
          <button
            className="hidden lg:block bg-primary mt-4 px-2 text-xs xl:text-base whitespace-nowrap text-white font-semibold rounded-md p-3"
            onClick={() => navigate("/careers")}
          >
            Opportunity with us
          </button>
          <button
            className="lg:hidden  pr-3  px-2 text-xl  whitespace-nowrap flex justify-end text-black bg-none hover:text-gray-700 font-semibold rounded-md p-3"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden w-[300px] bg-white shadow-md pb-5 absolute right-0 top-0">
          <div className="flex justify-end pr-2 pt-2">
            <button
              className="text-black hover:text-gray-700"
              onClick={toggleMobileMenu}
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          <ul className="flex flex-col  gap-5 justify-center  items-center px-10 text-lg">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={() => {
                  setActiveLogo("home");
                  toggleMobileMenu();
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/health-care"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={() => {
                  setActiveLogo("health-care");
                  toggleMobileMenu();
                }}
              >
                Healthcare
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/waste-management"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={() => {
                  setActiveLogo("waste-management");
                  toggleMobileMenu();
                }}
              >
                Waste Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/startup-project"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={() => {
                  setActiveLogo("startup-project");
                  toggleMobileMenu();
                }}
              >
                Startup Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hospitality/assetManagement"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={toggleMobileMenu}
              >
                Hospitality
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-inspiration"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={toggleMobileMenu}
              >
                Our Inspiration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
                onClick={toggleMobileMenu}
              >
                Opportunity with us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
