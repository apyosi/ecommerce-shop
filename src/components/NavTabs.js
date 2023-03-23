import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, SearchIcon, XIcon, ShoppingBagIcon} from '@heroicons/react/outline'

function NavTabs({ search, setSearch }) {
  const[menu,setMenu] = useState(false)

  let menuBar

  if(menu) {
    menuBar =  <div className="">
        <ul className="fixed w-full ml-[-10px]   mt-2 md:ml-[15px] bg-zinc-200  z-30">
          <li className="border-b-2 border-zinc-300 w-full hover:bg-zinc-400 duration-300 ">
            <NavLink to="/" className="nav-link text-2xl text-white  px-2 m-1" onClick={() => setMenu(!menu)}> Home </NavLink>          
          </li>
          <li className="border-b-2  border-zinc-300 w-full hover:bg-zinc-400 duration-300">
            <NavLink to="/men" className="nav-link text-2xl  text-white px-2 m-1" onClick={() => setMenu(!menu)}>Men</NavLink>            
          </li>
          <li className="border-b-2  border-zinc-300 w-full hover:bg-zinc-400 duration-300">
            <NavLink to="/women" className="nav-link text-2xl text-white px-2 m-1" onClick={() => setMenu(!menu)}>Women</NavLink>                         
          </li>
          <li className="border-b-2  border-zinc-300 w-full hover:bg-zinc-400 duration-300">
            <NavLink to="/tech" className="nav-link text-2xl text-white px-2 m-1" onClick={() => setMenu(!menu)} >Tech </NavLink>                                   
          </li>
          <li className="border-b-2  border-zinc-300 w-full hover:bg-zinc-400 duration-300">
            <NavLink to="/categories" className="nav-link text-2xl text-white px-2 m-1" onClick={() => setMenu(!menu)}> All Products</NavLink>
          </li>
        </ul>
      </div>
  }


  return (
    <nav className="fixed top-0 w-full flex flex-col justify-evently p-2  md:flex-row   h-[auto] z-10 bg-purple-700">
     <div className="flex mx-auto p-3 items-center justify-evently">
      <div className="sm:mx-[-110px]" >
        <Link to="/">
        <h1 className=" text-4xl text-white lg:text-4xl md:text-3xl px-5 ">ShopAddict</h1>
        </Link>
      </div>
      <div className="fixed left-7 md:hidden text-white w-[80px]" onClick={() => setMenu(!menu)}>
        {!menu ? <MenuIcon className="w-11" /> : <XIcon className="w-11"  />}
      </div> 
          
      <div className="fixed text-white z-40 w-[80px] sm:right-[-20px] right-1" >
          <NavLink to="/cart">
            <ShoppingBagIcon className=" w-11"/>
            <span className=" absolute text-gray-700 left-5 top-6 w-6 rounded-full bg-white">8</span>
          </NavLink>  
      </div>
     
     </div>
        
        <ul className="hidden lg:items-center md:flex sm:items-center ">
          <li className="link sm:mx-[-15px]">
            <NavLink to="/" className="text-2xl text-white px-2 m-1 rounded-xl sm:text-[18px] lg:pl-5 lg:text-xl " >  Home</NavLink>
          </li>
          <li className="link sm:mx-[-15px]">
            <NavLink to="/men"  className=" text-2xl text-white px-2 m-1 rounded-xl sm:text-[18px] lg:pl-5 lg:text-xl">Men</NavLink>
          </li>
          <li className="link sm:mx-[-15px]">
            <NavLink to="/women" className="text-2xl text-white px-2 m-1 rounded-xl sm:text-[18px] lg:pl-5 lg:text-xl">Women</NavLink>
          </li>
          <li className="link sm:mx-[-15px]">
            <NavLink to="/tech" className=" text-2xl text-white px-2 m-1 rounded-xl sm:text-[18px] lg:pl-5 lg:text-xl"> Tech</NavLink>            
          </li>
          <li className="link sm:mx-[-15px]">
            <NavLink to="/categories" className="text-2xl text-white px-2 m-1 rounded-xl sm:text-[18px] lg:pl-5 lg:text-xl"> All </NavLink>                       
          </li>
        </ul>
    
      <div className="flex mx-auto  relative items-center mr-6">
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
         
          <input
            className="w-[350px] lg:w-60  md:w-[80%]  h-9 p-2  rounded-xl"
            id="search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
         
          <button type="submit" onClick={(e) => setSearch(e.target.value)}>
            <SearchIcon className="w-7 h-13  right-2 top-2 absolute text-gray-500  md:w-8 md:h-8 md:right-2 md:top-5 text-bold text-2xl mx-2"></SearchIcon>
          </button>
        </form>
      </div>
     {menuBar}
    </nav>
  );
}

export default NavTabs;