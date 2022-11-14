export const classes = {
	navContainer: {
		body: ` w-100% no:mt-[30px] no:mx-[15px] md:mx-[30px] sm:mt-[30px] h-[120px] flex flex-row`,
		navbar: {
			body: `flex no:w-[100%] md:w-[78.8%] h-[120px] bg-[#272343] rounded-[20px] overflow-hidden flex-none`,
			navlinks: ` h-full w-full flex flex-row justify-between items-center`,
			linklist: `w-[40%] no:hidden md:flex flex-row justify-between items-center font-[Arial] text-[#FFFFFF] text-[22px] font-[700]`,
			page: "mx-[11px] min-w-[80px] w-[100px] text-center cursor-pointer",
			hamburger: `md:hidden ml-[20px] cursor-pointer`,
		},
		iconlist: {
			body: `flex flex-row justify-between items-center`,
			icons: `mr-[34px] cursor-pointer`,
			logIcons: "mr-[34px] cursor-pointer no:hidden md:inline",
			filIcons: "mr-[34px] cursor-pointer no:inline md:hidden",
		},
	},
	profileBoard: {
		body: ` no:hidden md:flex h-[100%] ml-[30px] bg-white rounded-[20px] overflow-hidden w-[21.5%] justify-start items-center px-[20px]`,
		profileIcon: {
			body: "w-[20%] min-w-[60px] max-w-[70px] h-[55%] rounded-[50%] bg-[#272343] flex justify-center items-center",
			icon: "text-[#FFF] text-[35px]",
		},
		nameText: {
			body: "flex flex-col justify-center items-start ml-[10px] w-[80%]",
			Hello: "text-[1.4em] text-[#677094]",
			CompName: "text-[1.4em] text-[500] text-[#272343]",
		},
	},
};
