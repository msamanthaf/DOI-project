import React from 'react';

interface HeaderProps {
	menuItems: { name: string; href: string }[];
}

export const Header: React.FC<HeaderProps> = ({ menuItems }) => {
	return (
		<div>
			<header className="md:flex-wrap top-0 left-0 right-0 pl-36 pr-36 text-base">
				<nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
					<a>Join Now</a>
					{menuItems.map((item, index) => (
						<a
							key={index}
							href={item.href}
							className="px-3 py-2 rounded-md text-sm font-medium"
						>
							{item.name}
						</a>
					))}
				</nav>
			</header>
		</div>
	);
};
