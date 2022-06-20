/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					dark: '#293241',
					light: '#e0fbfc'
				},
				highlight: '#ee6c4d',
				mildBlue: '#98c1d9',
				darkerBlue: '#3d5a80',
				code: '#1F2937'
			}
		}
		// extend: {
		// 	colors: {
		// 		primary: {
		// 			dark: '#162521',
		// 			light: '#C0E0DE'
		// 		},
		// 		highlight: '#4F7CAC',
		// 		mildBlue: '#9EEFE5',
		// 		darkerBlue: '#3C474B',
		// 		code: '#1F2937'
		// 	}
		// }
	},
	plugins: [require('@tailwindcss/typography')]
};
