import NavLinks from "@/components/atoms/NavLinks";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          PCB
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/sign-in" className="btn btn-outline btn-primary">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
