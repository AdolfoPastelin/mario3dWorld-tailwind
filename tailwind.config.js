module.exports = {
	purge: [
		'./public/**/*.html',
	],
	darkMode: false,
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'wave-pattern': 'url(../img/wave-white.png)'
			})
		}
	},
	variants: {
		extend: {}
	},
	plugins: [],
}