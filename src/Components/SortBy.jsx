const SortBy = () => {
	return (
		<div className="sxl:hidden md:flex w-[20%] h-[100%] bg-[#fff] ml-[30px] rounded-[20px] flex-col justify-start items-center">
			<div className="w-[100%] h-[15%] flex justify-center items-center">
				<button className="w-[70%] h-[40px] bg-[#EED132] rounded-[30px] font-[700] text-[#000] sxl:text-[15px] lg:text-[18px] hover:bg-[rgba(238,209,50,0.8)]">Upgrade Account</button>
			</div>
			<div className="w-[80%] h-[85%] flex flex-col justify-start items-start">
				<div className="text-[20px] font-[700] text-[#272343]">Sort By</div>
				<div className="flex mt-[10px] flex-col">
					<div className="font-[700] text-[17px] text-[#677094]">Date</div>
					<div className="ml-3 font-[500] text-[17px] text-[#677094]">
						<input type="checkbox" name="latest" id="date" className="w-[20px] accent-[#677094]" />
						<label htmlFor="latest">Latest</label>
					</div>
					<div className="ml-3 font-[500] text-[17px] text-[#677094]">
						<input type="checkbox" name="oldest" id="date" className="w-[20px] accent-[#677094]" />
						<label htmlFor="oldest">Oldest</label>
					</div>
				</div>
				<div className="flex flex-col my-3">
					{/* <input type="checkbox" name="Date" id="date" className="w-[20px] accent-[#677094]" /> */}
					<div className="font-[700] text-[17px] text-[#677094]">Hazard-Level</div>
					<div className="ml-3 font-[500] text-[17px] text-[#677094]">
						<input type="checkbox" name="high-low" id="date" className="w-[20px] accent-[#677094]" />
						<label htmlFor="high-low">High to Low</label>
					</div>
					<div className="ml-3 font-[500] text-[17px] text-[#677094]">
						<input type="checkbox" name="low-high" id="date" className="w-[20px] accent-[#677094]" />
						<label htmlFor="low-high">Low to High</label>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="font-[700] text-[17px] text-[#677094]">Views</div>
					<div className="ml-3 font-[500] text-[17px] text-[#677094]">
						<input type="checkbox" name="views" id="date" className="w-[20px] accent-[#677094]" />
						<label htmlFor="views">Most</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SortBy;
