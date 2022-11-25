import { Link } from "react-router-dom";
import { Views, Bookmark } from "../Assets/library";

const SinglePost = ({ data }) => {
	return (
		<div className="w-[100%] p-3 sxl:h-[180px] md:h-[170px] min-h-[230px] max-h-[200px] first:mt-[0px] mt-[10px] bg-[#fff] rounded-[20px] flex flex-col items-center justify-center">
			<div className="flex mb-5 w-[100%] h-[10%] justify-between px-3 pt-1 text-[#677094] sxl:text-[12px] md:text-[22px] font-[700]">
				<p>{data.companyName}</p>
				<p className="text-base">{data.dateOccured}</p>
			</div>
			<div className="w-[100%] mb-4 max-h-[100px] my-[5px] h-[45%] px-3 flex justify-center items-center text-[#272343] font-[500] sxl:text-[12px] sm:text-[16px] md:text-[17px] break-words text-ellipsis sxl:leading-[12px] sm:leading-[20px]">
				{data.problem}
			</div>
			<div className="w-[100%] h-[45%] max-h-[50px] px-3 flex sxl:flex-col md:flex-row justify-between sxl:items-between md:items-center">
				<div className="sxl:w-full md:w-fit h-[40%] flex sxl:justify-start md:justify-between items-center mb-1">
					<p className=" text-white w-fit bg-red-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">{data.industry}</p>
					<p className=" text-white w-fit bg-yellow-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">{data.type}</p>
					<p className=" text-white w-fit bg-blue-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">{data.hazardLevel}</p>
					<p className=" text-white w-fit bg-green-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">
						{data.effectDuration} days
					</p>
				</div>
				<div className="sxl:w-full md:w-2/5 h-[60%] flex sxl:justify-end md:justify-end items-center">
					<div className="flex mr-4">
						<img src={Views} alt="views" />
						<p className=" text-[#677094] sxl:text-[12px] md:text-[15px] font-[700] ml-1">{data.views}</p>
					</div>
					<Link
						to="/post"
						className="bg-[#EED132] text-[#000] sxl:w-[150px] md:w-[200px] sxl:h-[28px] md:h-[45px] rounded-[40px]  sxl:text-[13px] md:text-[18px] font-[700] hover:bg-[rgba(238,209,50,0.8)]"
					>
						SOLUTION
					</Link>
					<button className="ml-[10px]">
						<img src={Bookmark} alt="Bookmark" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
