import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, SearchIcon, XIcon, ShoppingBagIcon} from '@heroicons/react/outline'

function NavTabs({ search, setSearch }) {
  const[menu,setMenu] = useState(false)

  let menuBar

  if(menu) {
    menuBar =  <div className="navBar">
        <ul className="fixed  mt-2 ml-[5px] bg-zinc-200 w-full z-30">
          <li className="border-b-2  border-zinc-300 w-full">
            <NavLink to="/" className="nav-link text-2xl text-white px-2 m-1" onClick={() => setMenu(!menu)}> Home </NavLink>          
          </li>
          <li className="border-b-2  border-zinc-300 w-full">
            <NavLink to="/men" className="nav-link text-2xl  text-white px-2 m-1" onClick={() => setMenu(!menu)}>Men</NavLink>            
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink to="/women" className="nav-link text-2xl text-white px-2 m-1" onClick={() => setMenu(!menu)}>Women</NavLink>                         
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink to="/tech" className="nav-link text-2xl text-white px-2 m-1" onClick={() => setMenu(!menu)} >Tech </NavLink>                                   
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink to="/categories" className="nav-link text-2xl text-white px-2 m-1" onClick={() => setMenu(!menu)}> All Products Categories</NavLink>
          </li>
        </ul>
      </div>
  }


  return (
    <nav className=" flex flex-col justify-evently p-2  md:flex-row  h-[auto] z-10 bg-purple-700">
     <div className="flex mx-auto p-3 items-center justify-evently">
      <div >
        <h1 className="text-3xl text-white md:text-4xl px-5 ">ShopAddict</h1>
      </div>
      <div className="md:hidden text-white w-[80px]" onClick={() => setMenu(!menu)}>
        {!menu ? <MenuIcon className="w-9" /> : <XIcon className="w-9"  />}
      </div> 
    
     
     </div>
        
        <ul className="hidden  md:flex">
          <li className="link">
            <NavLink to="/" className=" text-2xl text-white px-2 m-1 rounded-xl" >  Home</NavLink>
          </li>
          <li className="link">
            <NavLink to="/men" className=" text-2xl text-white px-2 m-1 rounded-xl">Men</NavLink>
          </li>
          <li className="link">
            <NavLink to="/women" className="text-2xl text-white px-2 m-1 rounded-xl">Women</NavLink>
          </li>
          <li className="link">
            <NavLink to="/tech" className=" text-2xl text-white px-2 m-1 rounded-xl"> Tech</NavLink>            
          </li>
          <li className="link">
            <NavLink to="/categories" className="text-2xl text-white px-2 m-1 rounded-xl"> All Products Categories</NavLink>                       
          </li>
        </ul>
    
      <div className="flex mx-auto  relative items-center mr-6">
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          {/* <label htmlFor="search">Search Products</label> */}
          <input
            className=" md:w-80 h-9 p-2  rounded-xl"
            id="search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
         
          <button type="submit" onClick={(e) => setSearch(e.target.value)}>
            <SearchIcon className="w-5 h-5 left-48 top-8 absolute text-gray-500  md:w-8 md:h-8 md:left-64 md:top-7 text-bold text-2xl mx-2"></SearchIcon>
          </button>
        </form>

      <div className="absolute text-white w-[80px]" onClick={() => setMenu(!menu)}>
          <ShoppingBagIcon className="w-9"/>
      </div>
      </div>
     {menuBar}
    </nav>
  );
}

export default NavTabs;