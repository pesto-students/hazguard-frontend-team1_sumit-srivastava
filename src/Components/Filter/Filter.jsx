import React, { useState } from "react";
import { DropDown, Search } from "../../Assets/library";
import { classes } from "./classes";
import { useSelector, useDispatch } from "react-redux";
import { toggleInType, toggleHzType, toggleLevel, toggleLocation } from "../../Store/Actions/Actions";

const Filter = () => {
	//importing state from store
	const filter = useSelector((state) => state.filterReducer);

	//inheriting function to change the state
	const dispatch = useDispatch();

	return (
		<div className={classes.body}>
			<div className={classes.sort.body}>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Industry type</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Chemical</p>
						<img
							src={DropDown}
							alt="dropdown"
							className={`cursor-pointer ${filter.industry === true ? "rotate-180" : "rotate-0"}`}
							onClick={() => {
								dispatch(toggleInType());
							}}
						/>
						{filter.industry && (
							<div className="bg-[#fff] absolute w-[200px] h-[300px] mt-[330px] ml-[50px] shadow-[4px_4px_4px_rgba(0,0,0,0.3),-4px_-4px_4px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center rounded-[20px]">
								<option
									value="Chemical"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center rounded-tr-[20px] rounded-tl-[20px] hover:text-[#fff] cursor-pointer"
								>
									Chemical
								</option>
								<option
									value="Oil&Gas-Production"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Oil & Gas Production
								</option>
								<option
									value="Mining"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Mining
								</option>
								<option
									value="Agriculture"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Agriculture
								</option>
								<option
									value="Apparel"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Apparel
								</option>
								<option
									value="Construction"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Construction
								</option>
								<option
									value="Forestry"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Forestry
								</option>
								<option
									value="Shipping"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Shipping
								</option>
								<option
									value="Transport"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Transport
								</option>
								<option
									value="Utilities"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] min-h-[20px] h-[30px] hover:bg-[#677094] w-[100%] text-center rounded-br-[20px] rounded-bl-[20px] hover:text-[#fff] cursor-pointer"
								>
									Utilities
								</option>
							</div>
						)}
					</div>
				</div>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Hazard type</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Safety</p>
						<img
							src={DropDown}
							alt="dropdown"
							className={`cursor-pointer ${filter.hazard === true ? "rotate-180" : "rotate-0"}`}
							onClick={() => {
								dispatch(toggleHzType());
							}}
						/>
						{filter.hazard && (
							<div className="bg-[#fff] absolute w-[200px] h-[120px] mt-[150px] ml-[50px] shadow-[4px_4px_4px_rgba(0,0,0,0.3),-4px_-4px_4px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center rounded-[20px]">
								<option
									value="Biological"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center rounded-tr-[20px] rounded-tl-[20px] hover:text-[#fff] cursor-pointer"
								>
									Biological
								</option>
								<option
									value="Chemical"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Chemical
								</option>
								<option
									value="Physical"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Physical
								</option>
								<option
									value="Safety"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center rounded-br-[20px] rounded-bl-[20px] hover:text-[#fff] cursor-pointer"
								>
									Safety
								</option>
							</div>
						)}
					</div>
				</div>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Hazard Level</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Innocuous</p>
						<img
							src={DropDown}
							alt="dropdown"
							className={`cursor-pointer ${filter.level === true ? "rotate-180" : "rotate-0"}`}
							onClick={() => {
								dispatch(toggleLevel());
							}}
						/>
						{filter.level && (
							<div className="bg-[#fff] absolute w-[200px] h-[90px] mt-[120px] ml-[50px] shadow-[4px_4px_4px_rgba(0,0,0,0.3),-4px_-4px_4px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center rounded-[20px]">
								<option
									value="Low"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center rounded-tr-[20px] rounded-tl-[20px] hover:text-[#fff] cursor-pointer"
								>
									Low
								</option>
								<option
									value="Moderate"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Moderate
								</option>
								<option
									value="High"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center rounded-br-[20px] rounded-bl-[20px] hover:text-[#fff] cursor-pointer"
								>
									High
								</option>
							</div>
						)}
					</div>
				</div>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Location</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Gujarat</p>
						<img
							src={DropDown}
							alt="dropdown"
							className={`cursor-pointer ${filter.location === true ? "rotate-180" : "rotate-0"}`}
							onClick={() => {
								dispatch(toggleLocation());
							}}
						/>
						{filter.location && (
							<div className="bg-[#fff] absolute w-[200px] h-[120px] mt-[150px] ml-[50px] shadow-[4px_4px_4px_rgba(0,0,0,0.3),-4px_-4px_4px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center rounded-[20px] pt-[5px]">
								<div className="flex">
									<input type="text" className="w-[150px] h-[30px] outline-none bg-[#E8E8E8] rounded-[20px] pl-[10px] font-[Arial] font-[700] text-[#677094] text-[15px] mb-[5px]" />
									<img src={Search} alt="Search" className="w-[20px] ml-[5px]"/>
								</div>
								<option
									value="Chemical"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Chemical
								</option>
								<option
									value="Manufacturing"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
								>
									Manufacturing
								</option>
								<option
									value="Oil&gas"
									className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center rounded-br-[20px] rounded-bl-[20px] hover:text-[#fff] cursor-pointer"
								>
									Oil & Gas
								</option>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className={classes.search.body}>
				<input type="text" className={classes.search.searchInput} placeholder="search here" />
				<img src={Search} alt="search" />
			</div>
		</div>
	);
};

export default Filter;
