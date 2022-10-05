import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <h7 className="text-center"> 
                    Ricky & Morty
                    </h7>
                    <h7 className="text-center"> 
                    <div className="navbar-nav fs-5">
                        <NavLink to="/contact" className="nav-link">
                        Contact
                        </NavLink>
                    </div>
                    </h7>
                </div>
            </div>
        </div>
    </div>


  );
};

export default Navbar;