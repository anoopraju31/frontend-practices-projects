/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-image': "url('/src/assets/img/header.avif')",
				'photo-1': "url('/src/assets/img/photo-1.jpg')",
				'photo-2': "url('/src/assets/img/photo-2.jpg')",
				'photo-3': "url('/src/assets/img/photo-3.jpg')",
				'photo-4': "url('/src/assets/img/photo-4.jpg')",
				'photo-5': "url('/src/assets/img/photo-5.jpg')",
				'photo-6': "url('/src/assets/img/photo-6-a.jpg')",
				'photo-7': "url('/src/assets/img/photo-7.jpg')",
				'photo-8': "url('/src/assets/img/photo-8.jpg')",
			},
		},
	},
	plugins: [],
}
