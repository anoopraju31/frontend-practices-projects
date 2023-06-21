/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			padding: {
				// horizontal
				hori: 'var(--padding-x)',
				'hori-md': 'var(--padding-x-md)',
				'hori-sm': 'var(--padding-x-sm)',

				// vertical
				verti: 'var(--padding-y)',
				'verti-md': 'var(--padding-y-md)',
				'verti-sm': 'var(--padding-y-sm)',

				// navbar height
				'nav-height': 'var(--nav-height)',
				'nav-height-md': 'var(--nav-height-md)',
				'nav-height-sm': 'var(--nav-height-sm)',
			},
			margin: {
				hori: 'var(--padding-x)',
				'hori-md': 'var(--padding-x-md)',
				'hori-sm': 'var(--padding-x-sm)',
				verti: 'var(--padding-y)',
				'verti-md': 'var(--padding-y-md)',
				'verti-sm': 'var(--padding-y-sm)',
			},
			minHeight: {
				'menu-height-md': 'var(--menu-height-md)',
				'menu-height-sm': 'var(--menu-height-sm)',
			},
			height: {
				'nav-height': 'var(--nav-height)',
				'nav-height-md': 'var(--nav-height-md)',
				'nav-height-sm': 'var(--nav-height-sm)',
			},
			fontSize: {
				'menu-lg': 'var(--menu-font-size-lg)',
				'menu-sm': 'var(--menu-font-size-sm)',
			},
		},
	},
	plugins: [],
}
