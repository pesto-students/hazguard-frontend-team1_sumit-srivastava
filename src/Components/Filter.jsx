const Filter = ({ values, setValues, industryType, hazardType, hazardLevel, location, locationOptions, sort }) => {
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	return (
		<div className="w-[100vw] mt-[30px] h-[120px] flex sxl:px-[15px] md:px-[30px]">
			<div className="flex w-[100%] h-[130px] rounded-[20px] overflow-hidden sxl:flex-wrap md:flex-nowrap sxl:justify-between md:justify-center items-center sxl:bg-[#ffffff] md:bg-transparent sxl:px-5 md:px-0 sxl:py-1">
				<div className="sxl:w-fit md:w-[20%] sxl:h-fit md:h-full mr-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="industryType" className="text-[#272343] sxl:text-[15px] sm:text-[22px] font-semibold">
						Industry Type
					</label>
					<select
						id="industryType"
						name="industryType"
						value={industryType}
						onChange={handleChange("industryType")}
						className="text-center sxl:py-1 md:py-2 px-0 w-auto text-sm text-red-400 font-medium bg-transparent border-0 border-b-2 border-[#677094]"
					>
						<option value="">Industry Type</option>
						<option value="Agriculture">Agriculture</option>
						<option value="Apparel">Apparel</option>
						<option value="Oil & Gas Production">Oil & Gas Production</option>
						<option value="Construction">Construction</option>
						<option value="Manufacturing">Manufacturing</option>
						<option value="Mining">Mining</option>
						<option value="Forestry">Forestry</option>
						<option value="Shipping">Shipping</option>
						<option value="Transport">Transport</option>
						<option value="Utilities">Utilities</option>
					</select>
				</div>
				<div className="sxl:w-fit md:w-[20%] sxl:h-fit md:h-full mx-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="hazardType" className="text-[#272343] sxl:text-[15px] sm:text-[22px] font-semibold">
						Hazard Type
					</label>
					<select
						id="hazardType"
						name="hazardType"
						value={hazardType}
						onChange={handleChange("hazardType")}
						className="text-center sxl:py-1 md:py-2 px-0 w-auto text-sm text-yellow-400 font-medium bg-transparent border-0 border-b-2 border-[#677094]"
					>
						<option value="">Hazard Type</option>
						<option value="Safety">Safety</option>
						<option value="Biological">Biological</option>
						<option value="Physical">Physical</option>
						<option value="Chemical">Chemical</option>
					</select>
				</div>
				<div className="sxl:w-fit md:w-[20%] sxl:h-fit md:h-full mx-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="hazardLevel" className="text-[#272343] sxl:text-[15px] sm:text-[22px] font-semibold">
						Hazard Level
					</label>
					<select
						id="hazardLevel"
						name="hazardLevel"
						value={hazardLevel}
						onChange={handleChange("hazardLevel")}
						className="text-center sxl:py-1 md:py-2 px-0 w-auto text-sm text-blue-400 font-medium bg-transparent border-0 border-b-2 border-[#677094]"
					>
						<option value="">Hazard Level</option>
						<option value="Low">Low</option>
						<option value="Moderate">Moderate</option>
						<option value="High">High</option>
					</select>
				</div>
				<div className="sxl:w-fit md:w-[20%] sxl:h-fit md:h-full mx-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="location" className="text-[#272343] sxl:text-[15px] sm:text-[22px] font-semibold">
						Location
					</label>
					<select
						id="location"
						name="location"
						value={location}
						onChange={handleChange("location")}
						className="text-center sxl:py-1 md:py-2 px-0 w-auto text-sm text-[#677094] font-medium bg-transparent border-0 border-b-2 border-[#677094]"
					>
						<option value="">Location</option>
						{locationOptions.map((data) => {
							return (
								<option key={data[1]} value={data[0]}>
									{data[0]}
								</option>
							);
						})}
					</select>
				</div>
				<div className="sxl:w-fit md:w-[20%] sxl:h-fit md:h-full ml-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="sort" className="text-[#272343] sxl:text-[15px] sm:text-[22px] font-semibold">
						Sort By
					</label>
					<select
						id="sort"
						name="sort"
						value={sort}
						onChange={handleChange("sort")}
						className="text-center sxl:py-1 md:py-2 px-0 w-auto text-sm text-blue-400 font-medium bg-transparent border-0 border-b-2 border-[#677094]"
					>
						<option value="latest">Date Occurred: Latest</option>
						<option value="oldest">Date Occurred: Oldest</option>
						<option value="hightolow">Hazard Level: High to Low</option>
						<option value="lowtohigh">Hazard Level: Low to High</option>
						<option value="mostviews">Views: Most Views</option>
						<option value="leastviews">Views: Least Views</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filter;
