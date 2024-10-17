import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="md:w-[70%] w-[90%]  sm:w-[80%] mx-auto border-[1px] border-gray-400 shadow-xl mt-4 px-10 p-3 rounded-full flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl text-gray-800">HealthCare</span>
        </div>
        <div className="flex items-center">
          <button className="menu-icon lg:hidden" onClick={toggleMenu}>
            <span className="text-gray-600 hover:text-gray-900">
              {isMenuOpen ? (
                <i className="fa-solid fa-xmark text-xl "></i>
              ) : (
                <i className="fa-solid fa-bars text-xl "></i>
              )}
            </span>
          </button>
          <div className="lg:block hidden">
            <ul className="lg:flex items-center gap-5 space-x-4">
              <li>
                <NavLink to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/yoga"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Yoga
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/workout"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Workout
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bmi"
                  className="text-gray-600 hover:text-gray-900"
                >
                  BMI
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calorie"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Calorie
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`nav-links ${isMenuOpen ? 'block' : 'hidden'} mb-10 lg:hidden flex items-center justify-center mt-5 `}>
        <ul className="flex items-center gap-5">
          <li>
            <NavLink to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/yoga" className="text-gray-600 hover:text-gray-900">
              Yoga
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/workout"
              className="text-gray-600 hover:text-gray-900"
            >
              Workout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bmi"
              className="text-gray-600 hover:text-gray-900"
            >
              BMI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calorie"
              className="text-gray-600 hover:text-gray-900"
            >
              Calorie
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
