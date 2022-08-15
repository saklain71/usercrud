import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='text-xl hover:animate-bounce'>product</li>
            <li className='text-xl hover:animate-bounce'>contact</li>
            <li className='text-xl hover:animate-bounce'>About Us</li>
          </ul>
        </div>
        <Link className='text-3xl' to="/">EsHop</Link>
      </div>
      <div class="navbar-center hidden lg:flex" tabIndex="0">
        <ul class="menu menu-horizontal p-0" tabIndex="0">
        <li className='text-2xl hover:animate-bounce'><Link to="products"> Product </Link></li>
        <li className='text-xl hover:animate-bounce'><Link to="about"> About Us </Link></li>
        <li className='text-xl hover:animate-bounce'><Link to="additem"> Add Item </Link></li>
        </ul>
      </div>
      <div class="navbar-end gap-1">
        <Link className='border-2 text-xl btn p-1 ' to="login">Log In</Link>
        {/* <Link className='border-2 text-xl btn p-1 ' to="signUp">Sign Up</Link> */}
      </div>
    </div>
  );
};

export default Navbar;