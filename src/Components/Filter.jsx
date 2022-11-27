const Filter = ({ values, setValues, industryType, hazardType, hazardLevel, location, locationOptions }) => {
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	return (
		<div className="w-[100vw] mt-[30px] h-[120px] flex sxl:px-[15px] md:px-[30px]">
			<div className="flex sxl:w-[100%] md:w-[80%] h-[120px] rounded-[20px] overflow-hidden sxl:flex-wrap md:flex-nowrap sxl:justify-between md:justify-center items-center sxl:bg-[#ffffff] md:bg-transparent md:mr-[30px] sxl:px-5 md:px-0 sxl:py-1">
				<div className="sxl:w-fit md:w-[25%] sxl:h-fit md:h-full  mr-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
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
				<div className="sxl:w-fit md:w-[25%] sxl:h-fit md:h-full  mx-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
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
				<div className="sxl:w-fit md:w-[25%] sxl:h-fit md:h-full  mx-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
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
				<div className="sxl:w-fit md:w-[25%] sxl:h-fit md:h-full  ml-[15px] bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
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
			</div>
			<div className="sxl:hidden w-[20%] mx-[15px] sxl:first:mx-[15px] md:first:mx-[0px] sxl:last:mx-[15px] md:last:mx-[0px] sxl:min-w-fit bg-[#ffffff] md:rounded-[20px] md:flex flex-col justify-center items-center">
				<label htmlFor="search" className="text-[#272343] sxl:text-[15px] sm:text-[22px] font-semibold">
					Search
				</label>
				<input
					id="search"
					name="search"
					type="text"
					className="w-[75%] py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2"
					placeholder="Type here to search"
					// value={search}
					// onChange={handleChange("search")}
				/>
			</div>
		</div>
	);
};

export default Filter;
