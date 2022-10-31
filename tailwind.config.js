/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				white: {
				  900: "#ffffff",
				  700: "#C9C9CB",
				  500: "#A5A6A9",
				  300: "#363B49",
				},
				gray: {
				  700: "#8E8E8E",
				  900: "#363B49",
				},
				blue: {
				  700: "#7899FB",
				  900: "#3C6CFF",
				},
				black: {
				  900: "#000000",
				  700: "#404040",
				},
			  },
		},
	},
	daisyui: {
		themes: [
			{
				"light": {
					primary: "#fb923c",
					secondary: "#fdba74",
					accent: "#fed7aa",
					neutral: "#1f2937",
					"base-100": "#e5e7eb",
					info: "#8CCAC1",
					success: "#9CB686",
					warning: "#FFD261",
					error: "#ef4444",
					"--rounded-btn": " 1.9rem",
				},
			},
			{
				"dark": {
					primary: "#fb923c",
					secondary: "#fdba74",
					accent: "#fed7aa",
					neutral: "#374151",
					"base-100": "#111827",
					info: "#8CCAC1",
					success: "#9CB686",
					warning: "#FFD261",
					error: "#FC9783",
					"--rounded-btn": " 1.9rem",
				},
			},
		],
	},
	plugins: [
		require("daisyui"),
		require('tailwind-scrollbar')({ nocompatible: true })
	],
	variants: {
        scrollbar: ['rounded']
    }
};
