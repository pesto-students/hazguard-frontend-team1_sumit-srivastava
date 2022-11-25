import SortBy from "./SortBy";
import SinglePost from "./SinglePost";
import { useSelector } from "react-redux";

const Post = () => {
	const allHazards = useSelector((state) => state.allHazards);
	return (
		<div className="w-[100vw] h-[600px] mt-[30px] flex justify-between items-center sxl:px-[15px] md:px-[30px]">
			<div className="sxl:w-[100%] md:w-[80%] h-[100%] flex flex-col items-stretch justify-start overflow-y-scroll pr-2 addScrollBar">
				{allHazards.map((data) => {
					return <SinglePost key={data._id} data={data} />;
				})}
			</div>
			<SortBy />
		</div>
	);
};

export default Post;
