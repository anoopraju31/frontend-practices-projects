/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-image': "url('/src/assets/img/header.avif')",
				'photo-1': "url('/src/assets/img/photo-1.jpg')",
				'photo-2': "url('/src/assets/img/photo-2.jpg')",
			},
		},
	},
	plugins: [],
}
