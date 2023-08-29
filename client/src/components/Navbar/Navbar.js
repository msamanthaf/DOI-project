import React from 'react';
import './Navbar.css'; // Import the CSS file for the Navbar styling
import { FaInstagram } from 'react-icons/fa6';

function Navbar({ navItems }) {
	return (
		<div className="flex w-1/3 h-5.5vh bg-opacity-20 bg-white rounded-full justify-between items-center text-white font-sans py-4 px-12">
			{navItems.map((item, index) => (
				<a className="text-xl" key={index} href={item.link}>
					{item.name}
				</a>
			))}
			<hr
				className="border-0 bg-white justify-self-end mt-1"
				style={{ height: '2.75vh', width: '0.01vw' }}
			/>
			<FaInstagram className="text-2xl ml-1" />
		</div>
	);
}

export default Navbar;
