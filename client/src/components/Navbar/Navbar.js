import React from 'react';
import './Navbar.css'; // Import the CSS file for the Navbar styling
import { FaInstagram } from 'react-icons/fa6';

function Navbar() {
	return (
		<div className="navbar">
			<a href="#home">About</a>
			<a href="#about">Process</a>
			<a href="#contact">Algorithm</a>
			<a href="#contact">FAQ</a>
			<hr className="hr"></hr>
			<FaInstagram className="icon-link" />
		</div>
	);
}

export default Navbar;
