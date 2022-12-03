const NationalCard = () => {
	return (
		<div className="sxl:w-[100%] sxl:mt-[30px] md:w-[70%] md:mt-0 sxl:h-[500px] md:h-[90%] bg-gradient-to-tl from-[#180F55,60%] to-[#6A718F] rounded-[20px] flex flex-col justify-between items-center pb-[50px]">
			<div className="w-[100%] py-5 h-[60px] bg-[#272343] rounded-t-[20px] flex justify-center items-center font-[700] text-[#fff] sxl:text-[18px] md:text-[20px]">National Subscription</div>
			<div className="sxl:text-[20px] md:text-[30px] text-[#fff]">
				<span className="text-[Baloo] font-[400] sxl:text-[50px] md:text-[100px] text-[#fff]">₹ 499</span>
			</div>
			<div className="sxl:text-[18px] md:text-[25px] my-1 text-center font-[500] text-[#fff]">
				<span className="text-green-600 font-semibold mr-2">&#10003;</span>All level of Hazards Solution
			</div>
			<div className="sxl:text-[18px] md:text-[25px] my-1 text-center font-[500] text-[#fff]">
				<span className="text-green-600 font-semibold mr-2">&#10003;</span>Filter by Hazards level
			</div>
			<div className="sxl:text-[18px] md:text-[25px] my-1 text-center font-[500] text-[#fff]">
				<span className="text-green-600 font-semibold mr-2">&#10003;</span>
				<span className="text-[#EED132]">National</span> based company solution
			</div>
			<div className="sxl:text-[18px] md:text-[25px] my-1 text-center font-[500] text-[#fff]">
				<span className="text-green-600 font-semibold mr-2">&#10003;</span>Sort by Hazard level
			</div>
			<div className="w-[100%] mt-10 flex justify-center items-center">
				<button className="sxl:w-[70%] md:w-[30%] h-[40px] bg-[#EED132] rounded-[30px] font-[700] text-[#08] sxl:text-[15px] lg:text-[18px]" disabled>
					Activated
				</button>
			</div>
		</div>
	);
};

export default NationalCard;
