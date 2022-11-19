export const classes = {
	navContainer: {
		body: `w-[100vw] h-[120px] no:mt-[15px] md:mt-[30px] flex flex-row no:px-[15px] md:px-[30px]`,
		navbar: {
			body: `no:w-[100%] md:w-[80%] h-[100%] bg-[#272343] rounded-[20px] flex overflow-hidden md:mr-[30px]`,
			navlinks: `h-[100%] w-[100%] flex flex-row justify-between items-center`,
			linklist: `w-[40%] no:hidden md:flex flex-row justify-between items-center font-[Arial] text-[#FFFFFF] text-[25px] font-[700] pl-[10px]`,
			page: "mx-[10px] min-w-[80px] w-[100px] text-center cursor-pointer",
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
		body: `no:hidden md:w-[20%] h-[100%] bg-[#FFFFFF] rounded-[20px] md:flex overflow-hidden justify-center items-center px-[20px]`,
		profileIcon: {
			body: "min-w-[70px] min-h-[70px] rounded-[50%] bg-[#272343] flex justify-center items-center",
			icon: "text-[#FFF] text-[35px]",
		},
		nameText: {
			body: "no:hidden lg:flex flex-col justify-center items-start ml-[10px] w-[80%]",
			Hello: "text-[1.4em] text-[#677094]",
			CompName: "text-[1.4em] font-[700] text-[#272343]",
		},
	},
};
