/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			padding: {
				hori: 'var(--padding-x)',
				verti: 'var(--padding-y)',
			},
			margin: {
				hori: 'var(--padding-x)',
				verti: 'var(--padding-y)',
			},
		},
	},
	plugins: [],
}
