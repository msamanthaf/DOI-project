import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Assuming you have react-icons v6 installed

function Navbar({ navItems }) {
	return (
		<div className="flex w-full md:w-1/3 h-12 md:h-14 lg:h-16 bg-opacity-20 bg-white rounded-full justify-between items-center text-white font-sans py-2 md:py-3 lg:py-4 px-4 md:px-8 lg:px-12">
			{navItems.map((item, index) => (
				<a
					className="text-base md:text-xl lg:text-2xl"
					key={index}
					href={item.link}
				>
					{item.name}
				</a>
			))}
			<hr
				className="border-0 bg-white justify-self-end mt-1 hidden md:block"
				style={{ height: '1.5vh', width: '0.01vw' }}
			/>
			<FaInstagram className="text-xl md:text-2xl lg:text-3xl ml-1" />
		</div>
	);
}

export default Navbar;
