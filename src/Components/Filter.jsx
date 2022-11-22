import React from "react";
import { DropDown, Search } from "../Assets/library";
import { useSelector, useDispatch } from "react-redux";
import { toggleInType, toggleHzType, toggleLevel, toggleLocation } from "../Store/Actions/Actions";

const Filter = () => {
	//importing state from store
	const filter = useSelector((state) => state.filterReducer);

	//inheriting function to change the state
	const dispatch = useDispatch();

	return (
		<div className="w-[100vw] no:mt-[30px] md:mt-[30px] h-[120px] flex flex-row no:px-[15px] md:px-[30px]">
			<div className="flex no:w-[100%] md:w-[80%] sm:h-[120px] rounded-[20px] overflow-hidden no:flex-wrap md:flex-nowrap justify-between no:bg-[#ffffff] md:bg-transparent md:mr-[30px]">
				<div className="w-[25%] mx-[15px] no:first:mx-[15px] md:first:mx-[0px] no:last:mx-[15px] md:last:mx-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<p className="font-[Arial] text-[#272343] no:text-[15px] sm:text-[22px] font-[700]">Industry type</p>
					<div className="flex flex-row justify-center items-center no:mx-[10px] md:mx-[0px]">
						<p className="font-[Arial] text-[#677094] no:text-[15px] sm:text-[20px] font-[700] outline-none">Chemical</p>
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
				<div className="w-[25%] mx-[15px] no:first:mx-[15px] md:first:mx-[0px] no:last:mx-[15px] md:last:mx-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<p className="font-[Arial] text-[#272343] no:text-[15px] sm:text-[22px] font-[700]">Hazard type</p>
					<div className="flex flex-row justify-center items-center no:mx-[10px] md:mx-[0px]">
						<p className="font-[Arial] text-[#677094] no:text-[15px] sm:text-[20px] font-[700] outline-none">Safety</p>
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
				<div className="w-[25%] mx-[15px] no:first:mx-[15px] md:first:mx-[0px] no:last:mx-[15px] md:last:mx-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<p className="font-[Arial] text-[#272343] no:text-[15px] sm:text-[22px] font-[700]">Hazard Level</p>
					<div className="flex flex-row justify-center items-center no:mx-[10px] md:mx-[0px]">
						<p className="font-[Arial] text-[#677094] no:text-[15px] sm:text-[20px] font-[700] outline-none">Innocuous</p>
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
				<div className="w-[25%] mx-[15px] no:first:mx-[15px] md:first:mx-[0px] no:last:mx-[15px] md:last:mx-[0px] no:min-w-fit bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
					<p className="font-[Arial] text-[#272343] no:text-[15px] sm:text-[22px] font-[700]">Location</p>
					<div className="flex flex-row justify-center items-center no:mx-[10px] md:mx-[0px]">
						<p className="font-[Arial] text-[#677094] no:text-[15px] sm:text-[20px] font-[700] outline-none">Gujarat</p>
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
									<img src={Search} alt="Search" className="w-[20px] ml-[5px]" />
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
			<div className="no:hidden md:flex h-[120px] bg-white rounded-[20px] overflow-hidden w-[20%] flex justify-center items-center px-[10px]">
				<input
					type="text"
					className="w-[80%] h-[50px] border-solid border-[1px] border-[#8F8F8F] rounded-[20px] font-[Arial] text-center font-[400] text-[#B7B6B6] text-[20px] leading-[28px]"
					placeholder="search here"
				/>
				<img src={Search} alt="search" />
			</div>
		</div>
	);
};

export default Filter;
