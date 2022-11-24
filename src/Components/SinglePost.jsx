import { NavLink } from "react-router-dom";
import { Views, Bookmark } from "../Assets/library";

const SinglePost = () => {
	return (
		<div className="w-[100%] sxl:h-[180px] md:h-[170px] min-h-[170px] max-h-[200px] first:mt-[0px] mt-[10px] bg-[#fff] rounded-[20px] flex flex-col items-center justify-center">
			<div className="flex w-[100%] h-[10%] justify-between px-3 pt-1  text-[#677094] sxl:text-[12px] md:text-[18px] font-[700]">
				<p>Godrej Industry</p>
				<p>20:33 30/07/2022</p>
			</div>
			<div className="w-[100%] max-h-[100px] my-[5px] h-[45%] px-3 flex justify-center items-center text-[#272343] font-[700]  sxl:text-[12px] sm:text-[16px] md:text-[17px] break-words text-ellipsis sxl:leading-[12px] sm:leading-[18px]">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor accusantium numquam exercitationem officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Perspiciatis provident tenetur dolorem iure atque at ex iste illum tempora voluptate!
			</div>
			<div className="w-[100%] h-[45%] max-h-[50px] px-3 flex sxl:flex-col md:flex-row justify-between sxl:items-between md:items-center">
				<div className="sxl:w-full md:w-fit h-[40%] flex sxl:justify-start md:justify-between items-center mb-1">
					<p className=" text-white w-fit bg-red-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-0md:text-[15px] px-2 py-1 font-normal rounded-sm">Safety</p>
					<p className=" text-white w-fit bg-yellow-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-0md:text-[15px] px-2 py-1 font-normal rounded-sm">Chemical</p>
					<p className=" text-white w-fit bg-blue-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-0md:text-[15px] px-2 py-1 font-normal rounded-sm">Low</p>
					<p className=" text-white w-fit bg-green-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-0md:text-[15px] px-2 py-1 font-normal rounded-sm">30 days</p>
				</div>
				<div className="sxl:w-full md:w-2/5 h-[60%] flex sxl:justify-end md:justify-end items-center mt-1">
					<div className="flex mr-4">
						<img src={Views} alt="views" />
						<p className=" text-[#677094] sxl:text-[12px] md:text-[15px] font-[700] ml-1">107</p>
					</div>
					<NavLink to="/post">
						<button className="bg-[#EED132] text-[#000] sxl:w-[150px] md:w-[200px] sxl:h-[28px] md:h-[35px] rounded-[40px]  sxl:text-[13px] md:text-[18px] font-[700] hover:bg-[rgba(238,209,50,0.8)]">
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
