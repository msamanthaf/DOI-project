import Image from 'next/image';
import { Header } from '@/components/Header';

export default function Home() {
	const menuItems = [
		{ name: 'Home', href: '#' },
		{ name: 'Products', href: '/products' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<div>
			<Header menuItems={menuItems} />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section id="profile"></section>
			<section id="profile"></section>
			<section id="profile"></section>
			<section id="profile"></section>
			<section id="profile"></section>
			<section id="profile"></section>
			</main>
		</div>
	);
}
