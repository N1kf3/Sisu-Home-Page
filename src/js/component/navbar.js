import React from "react";
import { Link } from "react-router-dom";
import Navimg from "../../img/Navimg.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-5 d-flex justify-content-center navh">					
				<img src={Navimg} className="hpic" alt="..."/>    	
		</nav>
	);
};
