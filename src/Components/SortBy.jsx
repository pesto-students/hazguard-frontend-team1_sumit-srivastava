const SortBy = ({ values, setValues, sort }) => {
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	return (
		<div className="sxl:hidden self-start md:flex w-[20%] h-[20%] bg-[#fff] ml-[30px] rounded-[20px] flex-col justify-center items-center">
			<div className="w-[80%] h-[85%] flex flex-col justify-center items-center">
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
	);
};

export default SortBy;
