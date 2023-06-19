export const animationStart = 6

export const reveal = {
	hiddenVariant: {
		y: -100,
		zIndex: -10,
		opacity: 0,
	},
	revealedVariant: {
		y: 0,
		opacity: 1,
		zIndex: 0,
	},
	exitVariant: {
		y: -200,
		opacity: 0,
		zIndex: -10,
	},
}

export const expand = {
	shrink: {
		y: '100%',
		scale: 0.3,
		opacity: 0,
	},
	enlarge: {
		y: 0,
		scale: 1,
		opacity: 1,
	},
}
