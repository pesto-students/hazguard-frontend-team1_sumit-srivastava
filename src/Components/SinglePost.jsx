import React from "react";
import { NavLink } from "react-router-dom";
import { Views, Bookmark } from "../Assets/library";

const SinglePost = () => {
	return (
		<div className="w-[100%] h-[170px] min-h-[170px] first:mt-[0px] mt-[10px] bg-[#fff] rounded-[20px] flex flex-col items-center justify-stretch">
			<div className="flex w-[100%] h-[15%] justify-between px-3 pt-1 font-[Arial] text-[#677094] no:text-[12px] md:text-[18px] font-[700]">
				<p>Godrej Industry</p>
				<p>20:33 30/07/2022</p>
			</div>
			<div className="w-[100%] max-h-[100px] my-[5px] h-[60%] px-3 flex justify-center items-center text-[#272343] font-[700] font-[Arial] no:text-[12px] sm:text-[18px] md:text-[20px] break-words text-ellipsis no:leading-[12px] sm:leading-[18px]">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor accusantium numquam exercitationem officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Perspiciatis provident tenetur dolorem iure atque at ex iste illum tempora voluptate!
			</div>
			<div className="w-[100%] h-[15%] px-3 flex no:justify-end md:justify-between items-center pb-[10px]">
				<p className="font-[Arial] text-[#677094] no:hidden md:inline-block md:text-[18px] font-[700]">Hazard Type: Safety</p>
				<div className="flex no:justify-between md:justify-center items-center">
					<div className="flex mr-4">
						<img src={Views} alt="views" />
						<p className="font-[Arial] text-[#677094] no:text-[12px] md:text-[15px] font-[700] ml-1">107</p>
					</div>
					<NavLink to="/post">
						<button className="bg-[#EED132] text-[#FFF] no:w-[150px] md:w-[200px] no:h-[28px] md:h-[35px] rounded-[40px] font-[Arial] no:text-[13px] md:text-[18px] font-[700] hover:bg-[rgba(238,209,50,0.8)]">
							Solution
						</button>
					</NavLink>
					<button className="ml-[10px]">
						<img src={Bookmark} alt="Bookmark" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
