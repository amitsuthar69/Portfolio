/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				lg: '0 10px 20px rgba(0, 0, 0, 1)', // Adjust the alpha value to make the shadow darker
			},
		  fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		  },
		},
	  },
	plugins: [],
}
