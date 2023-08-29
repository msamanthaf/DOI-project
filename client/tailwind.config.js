/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'doi-blue': '#232946',
				'doi-light-blue': '#B8C1EC',
			},
			fontFamily: {
				mufteya: ['mufteya', 'sans-serif'],
				plex: ['IBM Plex Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
