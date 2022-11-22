import React from "react";

const SideSortBy = () => {
	return (
		<div className="w-[100%] h-[80%]">
			<div className="w-[80%] h-[30%] flex flex-col justify-center items-start">
				<div className="font-[Arial] text-[20px] font-[700] text-[#272343]">Sort By</div>
				<div className="flex mt-[10px]">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094]" />
					<div className="ml-[10px] font-[Arial] font-[700] text-[15px] text-[#677094]">Date</div>
				</div>
				<div className="flex">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094]" />
					<div className="ml-[10px] font-[Arial] font-[700] text-[15px] text-[#677094]">Hazard-Level</div>
				</div>
				<div className="flex">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094]" />
					<div className="ml-[10px] font-[Arial] font-[700] text-[15px] text-[#677094]">Views</div>
				</div>
			</div>
			<div className="w-[100%] h-[50%] flex flex-col justify-center items-starts">
				<div className="font-[700] font-[Arial] text-[15px] text-[#272343]">Rankings</div>
				<div className="flex font-[700] font-[Arial] text-[13px] text-[#677094] justify-between w-[100%]">
					<div>Rank</div>
					<div>Industry</div>
					<div>Posts</div>
				</div>
				<div className="flex font-[700] font-[Arial] text-[11px] text-[#fff] justify-between w-[100%] bg-[#677094] mt-[5px] px-[5px] py-[5px] max-h-[25px]">
					<div>1</div>
					<div>Adani Industries</div>
					<div>20</div>
				</div>
				<div className="flex font-[700] font-[Arial] text-[11px] text-[#fff] justify-between w-[100%] bg-[#677094] mt-[5px] px-[5px] py-[5px] max-h-[25px]">
					<div>2</div>
					<div>Godrej Industries</div>
					<div>17</div>
				</div>
				<div className="flex font-[700] font-[Arial] text-[11px] text-[#fff] justify-between w-[100%] bg-[#677094] mt-[5px] px-[5px] py-[5px] max-h-[25px]">
					<div>3</div>
					<div>Tata Motors Ltd</div>
					<div>15</div>
				</div>
				<div className="flex font-[700] font-[Arial] text-[11px] text-[#fff] justify-between w-[100%] bg-[#677094] mt-[5px] px-[5px] py-[5px] max-h-[25px]">
					<div>4</div>
					<div>Reliance Industries</div>
					<div>10</div>
				</div>
				<div className="flex font-[700] font-[Arial] text-[11px] text-[#fff] justify-between w-[100%] bg-[#677094] mt-[5px] px-[5px] py-[5px] max-h-[25px]">
					<div>5</div>
					<div>Nirma Chemicals</div>
					<div>9</div>
				</div>
				<div className="font-[700] font-[Arial] text-[14px]  text-[#677094]">Your rank: 03</div>
			</div>
		</div>
	);
};

export default SideSortBy;
