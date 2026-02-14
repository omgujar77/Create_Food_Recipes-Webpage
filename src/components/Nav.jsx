import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-7 py-4 md:h-[10vh] flex items-center justify-between relative">
      
      {/* Logo */}
      <img
        className="h-auto w-32"
        src="./src/images/Black-logo.70ed228c.svg"
        alt="logo"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-x-10 text-md items-center">
        <Link className="hover:text-green-600 duration-200" to="/">
          Home
        </Link>
        <Link className="hover:text-green-600 duration-200" to="/recipes">
          Recipes
        </Link>
        <Link className="hover:text-green-600 duration-200" to="/about">
          About
        </Link>
        <Link className="hover:text-green-600 duration-200" to="/contact">
          Contact
        </Link>
      </div>

      {/* Desktop Icon */}
      <i className="hidden md:block text-3xl ri-restaurant-2-fill text-green-600"></i>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-green-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="ri-close-line"></i>
        ) : (
          <i className="ri-menu-fold-line"></i>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-6 py-8 px-10 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link onClick={() => setIsOpen(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/recipes">
          Recipes
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/about">
          About
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
