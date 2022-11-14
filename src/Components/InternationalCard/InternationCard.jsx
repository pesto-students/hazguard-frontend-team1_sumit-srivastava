import React from "react";

const InternationCard = () => {
	return (
		<div className=" no:w-[100%] no:mt-[30px] md:w-[48%] md:mt-0 h-[100%] bg-gradient-to-tl from-[#180F55,60%] to-[#6A718F] rounded-[20px] flex flex-col justify-between items-center pb-[50px]">
			<div className="w-[100%] h-[60px] bg-[#272343] rounded-t-[20px] flex justify-center items-center font-[Arial] font-[700] text-[#fff] no:text-[18px] md:text-[20px]">International Subscription</div>
			<div className="text-[Arial] no:text-[20px] md:text-[30px] text-[#fff]">
				<span className="text-[Baloo] font-[400] no:text-[50px] md:text-[100px] text-[#fff]">89</span>$
			</div>
			<div className="mb-[100px]">
				<div className="text-[Arial] no:text-[18px] md:text-[25px] my-[10px] text-center font-[500]  text-[#fff]">All level of Hazards Solution</div>
				<div className="text-[Arial] no:text-[18px] md:text-[25px] my-[10px] text-center font-[500] text-[#fff]">Filter by Hazards level will be enabled</div>
				<div className="text-[Arial] no:text-[18px] md:text-[25px] my-[10px] text-center font-[500] text-[#fff]">
					<span className="text-[#EED132]">Country</span> based company solution
				</div>
				<div className="text-[Arial] no:text-[18px] md:text-[25px] my-[10px] text-center font-[500] text-[#fff]">Sort by Hazard level will be enabled</div>
			</div>
			<div className="w-[100%] flex justify-center items-center">
				<button className="no:w-[70%] md:w-[30%] h-[40px] bg-[#EED132] rounded-[30px] font-[Arial] font-[700] text-[#fff] no:text-[15px] lg:text-[18px]">Upgrade Account</button>
			</div>
		</div>
	);
};

export default InternationCard;
