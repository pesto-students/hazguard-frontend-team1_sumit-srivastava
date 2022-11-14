module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			theme: {
				colors: {
					lightBlue: "#5775E8",
					darkBlue: "#272343",
					pageBackground: "#E8E8E8",
					lightFont: "#677094",
					lightGrey: "#B7B6B6",
					primaryYellow: "#EED132",
				},
				fontFamily: {
					Arial: ["Arial"],
				},
				extend: {
					height: {
						120: "120px",
					},
					margin: {
						"30px": "30px",
					},
					borderRadius: {
						"20all": "20px",
					},
				},
			},
		},
		screens: {
			no: "0px",
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1100px",
			lg: "1301px",
			xl: "1700px",
		},
	},
	plugins: [],
};
