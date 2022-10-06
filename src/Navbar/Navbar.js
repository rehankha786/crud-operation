import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='head'>
      <div className='brand'>
        <h1>Book</h1>
      </div>
      <div className='btn-book'>
        
          <NavLink to='/form'><div className='btn btn-secondary' id='btn'>create book </div></NavLink>
       
      </div>
    </div>
  );
};

export default Navbar;
