/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			padding: {
				hori: 'var(--padding-x)',
				'hori-md': 'var(--padding-x-md)',
				'hori-sm': 'var(--padding-x-sm)',
				verti: 'var(--padding-y)',
				'verti-md': 'var(--padding-y-md)',
				'verti-sm': 'var(--padding-y-sm)',
			},
			margin: {
				hori: 'var(--padding-x)',
				'hori-md': 'var(--padding-x-md)',
				'hori-sm': 'var(--padding-x-sm)',
				verti: 'var(--padding-y)',
				'verti-md': 'var(--padding-y-md)',
				'verti-sm': 'var(--padding-y-sm)',
			},
		},
	},
	plugins: [],
}
