import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs({ search, setSearch }) {
  return (
    <nav className=" flex justify-evently  h-[80px] z-10 bg-purple-700">
      <div className="flex items-center">
        <h1 className="text-white text-4xl px-5 ">ShopAddict</h1>
      </div>

      <div
        className="px-2 flex justify-between items-center w-full h-full"
        id="navbarNav"
      >
        <ul className="hidden md:flex">
          <li className="link">
            <NavLink
              to="/"
              className=" text-2xl text-white px-2 m-1 rounded-xl"
            >
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/men"
              className=" text-2xl text-white px-2 m-1 rounded-xl"
            >
              {" "}
              Men
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/women"
              className="text-2xl text-white px-2 m-1 rounded-xl"
            >
              Women{" "}
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/tech"
              className=" text-2xl text-white px-2 m-1 rounded-xl"
            >
              Tech
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/categories"
              className="text-2xl text-white px-2 m-1 rounded-xl"
            >
              All Products Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center mr-6 ">
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          {/* <label htmlFor="search">Search Products</label> */}
          <input
            className="w-80 h-9 p-2 rounded-xl"
            id="search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit" onClick={(e) => setSearch(e.target.value)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-white  text-bold text-2xl mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div>
        <ul className="hidden">
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink to="/" className="nav-link text-2xl text-white px-2 m-1">
              Home
            </NavLink>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              to="/men"
              className="nav-link text-2xl text-white px-2 m-1"
            >
              {" "}
              Men
            </NavLink>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              to="/women"
              className="nav-link text-2xl text-white px-2 m-1"
            >
              Women
            </NavLink>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              to="/tech"
              className="nav-link text-2xl text-white px-2 m-1"
            >
              Tech
            </NavLink>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              to="/categories"
              className="nav-link text-2xl text-white px-2 m-1"
            >
              All Products Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
