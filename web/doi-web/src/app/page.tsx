import Image from 'next/image';
import { Header } from '@/components/Header';

export default function Home() {
	const menuItems = [
		{ name: 'Join Now', href: '#' },
		{ name: 'About', href: '#' },
		{ name: 'Process', href: '#' },
		{ name: 'Algorithm', href: '#' },
		{ name: 'FAQ', href: '#' },
		{ name: 'The Creators', href: '#' },
		{ name: 'Become a Sponsor', href: '#' },
	];

	return (
		<div>
			<Header menuItems={menuItems} />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				{menuItems.map((item, index) => (
					<section key={index} id={item.name}></section>
				))}
			</main>
		</div>
	);
}
