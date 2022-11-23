const SortBy = () => {
	return (
		<div className="no:hidden md:flex w-[20%] h-[100%] bg-[#fff] ml-[30px] rounded-[20px] flex-col justify-center items-center">
			<div className="w-[100%] h-[15%] flex justify-center items-center">
				<button className="w-[70%] h-[40px] bg-[#EED132] rounded-[30px] font-[700] text-[#fff] no:text-[15px] lg:text-[18px] hover:bg-[rgba(238,209,50,0.8)]">Upgrade Account</button>
			</div>
			<div className="w-[80%] h-[30%] flex flex-col justify-center items-start">
				<div className="text-[20px] font-[700] text-[#272343]">Sort By</div>
				<div className="flex mt-[10px]">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094]" />
					<div className="ml-[10px] font-[700] text-[17px] text-[#677094]">Date</div>
				</div>
				<div className="flex">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094]" />
					<div className="ml-[10px] font-[700] text-[17px] text-[#677094]">Hazard-Level</div>
				</div>
				<div className="flex">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094]" />
					<div className="ml-[10px] font-[700] text-[17px] text-[#677094]">Views</div>
				</div>
			</div>
			<div className="w-[100%] h-[50%] flex flex-col justify-center items-start ml-[60px]">
				<div className="font-[700] text-[20px] text-[#272343]">Rankings</div>
				<div className="flex font-[700] lg:text-[16px] md:text-[13px] text-[#677094] justify-between w-[80%]">
					<div>Rank</div>
					<div>Industry Name</div>
					<div>Posts</div>
				</div>
				<div className="flex font-[700] lg:text-[16px] md:text-[13px] text-[#fff] justify-between w-[80%] bg-[#677094] mt-[5px] px-[5px] py-[5px]">
					<div>1</div>
					<div>Adani Industries</div>
					<div>20</div>
				</div>
				<div className="flex font-[700] lg:text-[16px] md:text-[13px] text-[#fff] justify-between w-[80%] bg-[#677094] mt-[5px] px-[5px] py-[5px]">
					<div>2</div>
					<div>Godrej Industries</div>
					<div>17</div>
				</div>
				<div className="flex font-[700] lg:text-[16px] md:text-[13px] text-[#fff] justify-between w-[80%] bg-[#677094] mt-[5px] px-[5px] py-[5px]">
					<div>3</div>
					<div>Tata Motors Ltd</div>
					<div>15</div>
				</div>
				<div className="flex font-[700] lg:text-[16px] md:text-[13px] text-[#fff] justify-between w-[80%] bg-[#677094] mt-[5px] px-[5px] py-[5px]">
					<div>4</div>
					<div>Reliance Industries</div>
					<div>10</div>
				</div>
				<div className="flex font-[700] lg:text-[16px] md:text-[13px] text-[#fff] justify-between w-[80%] bg-[#677094] mt-[5px] px-[5px] py-[5px]">
					<div>5</div>
					<div>Nirma Chemicals</div>
					<div>9</div>
				</div>
				<div className="font-[700] text-[16px] text-[#677094]">Your rank: 03</div>
			</div>
		</div>
	);
};

export default SortBy;
