import { Link, useParams } from "react-router-dom";
import { BackArrow } from "../Assets/library";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import { useSelector } from "react-redux";

const Post = () => {
	const { hazardId } = useParams();
	const hazard = useSelector((state) => state.allHazards.filter((data) => data.hazardId === hazardId)[0]);
	return (
		<div className="w-[100vw] h-[100vh] px-[15px] py-[15px] ">
			<div className="w-[100%] h-[100%] bg-[#fff] rounded-[20px] px-[20px] py-[20px] overflow-y-hidden ">
				<div className="w-[100%] h-[5%] flex justify-between items-center py-[10px]">
					<Link to="/home">
						<img src={BackArrow} alt="back" />
					</Link>
					<p className="font-[700] text-[#677094] sxl:text-[12px] md:text-[20px]">{hazard.companyName}</p>
					<p className="font-[700] text-[#677094] sxl:text-[12px] md:text-[20px]">{hazard.dateOccurred.slice(0, 10)}</p>
				</div>
				<div className="w-[100%] h-[30%] flex flex-col justify-center items-start py-[20px] sxl:leading-[18px] md:leading-[25px]">
					<div className="font-[700] text-[#677094] sxl:text-[15px] md:text-[24px]">Problem Statement</div>
					<div className="font-[700] text-[#272343] sxl:text-[15px] md:text-[20px] sxl:leadin4rempx] md:leading-[21px] sxl:overflow-y-scroll md:overflow-auto">{hazard.problem}</div>
				</div>
				<div className="w-[100%] h-[65%] flex justify-center items-start flex-wrap">
					<div className="sxl:w-[100%] md:w-[50%] sxl:h-[70%] md:h-[100%] overflow-y-scroll addScrollBar">
						<div className="font-[700] text-[#677094] sxl:text-[15px] md:text-[24px] sxl:leading-[19px] md:leading-[25px]">Solution</div>
						<div className="font-[700] text-[#677094] sxl:text-[15px] md:text-[18px] sxl:leading-[17px] md:leading-[20px] py-[10px]">{hazard.solution}</div>
					</div>
					<div className="sxl:w-[100%] md:w-[50%] sxl:h-[30%] md:h-[90%] flex flex-wrap justify-center items-start self-center overflow-y-scroll addScrollBar">
						<img src={image1} alt="" className="sxl:w-[50%] sxl:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src={image2} alt="" className="sxl:w-[50%] sxl:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src={image3} alt="" className="sxl:w-[50%] sxl:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src={image4} alt="" className="sxl:w-[50%] sxl:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src={image3} alt="" className="sxl:w-[50%] sxl:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src={image2} alt="" className="sxl:w-[50%] sxl:h-[100%] md:w-[50%] md:h-[50%]" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
