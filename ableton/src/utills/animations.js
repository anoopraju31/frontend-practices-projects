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

export const textPop = {
	start: {
		y: 20,
		opacity: 0,
	},
	stop: {
		y: 0,
		opacity: 1,
	},
}

export const diagonalRiseLeft = {
	start: {
		x: -100,
		y: 100,
		opacity: 0,
	},
	stop: {
		x: 0,
		y: 0,
		opacity: 1,
	},
}

export const diagonalRiseRight = {
	start: {
		x: 100,
		y: 100,
		opacity: 0,
	},
	stop: {
		x: 0,
		y: 0,
		opacity: 1,
	},
}

export const show = {
	start: {
		opacity: 0,
	},
	stop: {
		opacity: 1,
	},
}
