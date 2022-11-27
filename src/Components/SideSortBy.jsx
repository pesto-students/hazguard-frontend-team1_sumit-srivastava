const SideSortBy = () => {
	return (
		<div className="w-[100%] h-[80%]">
			<div className="w-[80%] h-[30%] flex flex-col justify-center items-start">
				<div className="text-[20px] font-[700] text-[#272343]">Sort By</div>
				<div className="flex mt-[10px]">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094] mb-1" />
					<div className="ml-[10px] font-[700] text-[15px] text-[#677094]">Date</div>
				</div>
				<div className="flex">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094] my-0.5" />
					<div className="ml-[10px] font-[700] text-[15px] text-[#677094]">Hazard Level</div>
				</div>
				<div className="flex">
					<input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094] mt-1" />
					<div className="ml-[10px] font-[700] text-[15px] text-[#677094]">Views</div>
				</div>
			</div>
		</div>
	);
};

export default SideSortBy;
