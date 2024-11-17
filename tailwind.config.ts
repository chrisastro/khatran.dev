import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				amulya: ["Amulya", ...defaultTheme.fontFamily.sans],
				synonym: ["Synonym", ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			lemonade: "#F4BF77",
			...colors,
		},
	},
	plugins: [],
} satisfies Config;
