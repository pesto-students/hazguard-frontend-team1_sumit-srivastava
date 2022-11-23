const Filter = ({ values, setValues, industryType, hazardType, hazardLevel, location, search }) => {
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	return (
		<div className="w-[100vw] no:mt-[30px] md:mt-[30px] h-[120px] flex flex-row no:px-[15px] md:px-[30px]">
			<div className="flex no:w-[100%] md:w-[80%] sm:h-[120px] rounded-[20px] overflow-hidden no:flex-wrap md:flex-nowrap justify-between no:bg-[#ffffff] md:bg-transparent md:mr-[30px]">
				<div className="w-[25%] mx-[15px] no:first:mx-[15px] md:first:ml-[0px] no:last:mx-[15px] md:last:mx-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="industryType" className="text-[#272343] no:text-[15px] sm:text-[22px] font-semibold">
						Industry Type
					</label>
					<select
						id="industryType"
						name="industryType"
						value={industryType}
						onChange={handleChange("industryType")}
						className="block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2"
					>
						<option>Choose a industry type</option>
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
				<div className="w-[25%] mx-[15px] no:first:mx-[15px] md:first:mx-[0px] no:last:mx-[15px] md:last:mx-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="hazardType" className="text-[#272343] no:text-[15px] sm:text-[22px] font-semibold">
						Hazard Type
					</label>
					<select
						id="hazardType"
						name="hazardType"
						value={hazardType}
						onChange={handleChange("hazardType")}
						className="block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2"
					>
						<option>Choose a hazard type</option>
						<option value="Safety">Safety</option>
						<option value="Biological">Biological</option>
						<option value="Physical">Physical</option>
						<option value="Chemical">Chemical</option>
					</select>
				</div>
				<div className="w-[25%] mx-[15px] no:first:mx-[15px] md:first:mx-[0px] no:last:mx-[15px] md:last:mx-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="hazardLevel" className="text-[#272343] no:text-[15px] sm:text-[22px] font-semibold">
						Hazard Level
					</label>
					<select
						id="hazardLevel"
						name="hazardLevel"
						value={hazardLevel}
						onChange={handleChange("hazardLevel")}
						className="block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2"
					>
						<option>Choose a hazard level</option>
						<option value="Low">Low</option>
						<option value="Moderate">Moderate</option>
						<option value="High">High</option>
					</select>
				</div>
				<div className="w-[25%] mx-[15px] no:first:mx-[15px] md:first:mx-[0px] no:last:mx-[15px] md:last:mr-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<label htmlFor="location" className="text-[#272343] no:text-[15px] sm:text-[22px] font-semibold">
						Location
					</label>
					<select id="location" name="location" value={location} onChange={handleChange("location")} className="block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2">
						<option>Choose a location</option>
						<option value="Delhi, India">Delhi, India</option>
						<option value="Gujarat, India">Gujarat, India</option>
						<option value="Maharashtra, India">Maharashtra, India</option>
					</select>
				</div>
			</div>
			<div className="w-[20%] mx-[15px] no:first:mx-[15px] md:first:mx-[0px] no:last:mx-[15px] md:last:mx-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
				<label htmlFor="search" className="text-[#272343] no:text-[15px] sm:text-[22px] font-semibold">
					Search
				</label>
				<input
					id="search"
					name="search"
					type="text"
					className="w-[75%] py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2"
					placeholder="Type here to search"
					value={search}
					onChange={handleChange("search")}
				/>
			</div>
		</div>
	);
};

export default Filter;
