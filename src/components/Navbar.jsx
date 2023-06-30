import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.scss";

import { nav } from "../data/data.js"

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <>
        <div className="big-container">
          <div className="nav">
            <div className="logo">
              <h1>KR</h1>
            </div>

            <ul className={toggleMenu ? "nav-elements show-nav" : "nav-elements"}>
              {nav.map((list, index)=>(
                <li key={index}>
                  <NavLink to={list.path}>{list.text}</NavLink>
                </li>
              ))}

              <li><button className="white-button">Contact</button></li>
            </ul>
             
            <button className="toggle-button" onClick={()=>{
              setToggleMenu(!toggleMenu)
            }}>Menu</button>
          </div>
        </div>
      </>
    );
  }
  
  export default NavBar;