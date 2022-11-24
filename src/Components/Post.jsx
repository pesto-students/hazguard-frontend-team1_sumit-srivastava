import SortBy from "./SortBy";
import SinglePost from "./SinglePost";

const Post = () => {
	return (
		<div className="w-[100vw] h-[600px] mt-[30px] flex justify-between items-center sxl:px-[15px] md:px-[30px]">
			<div className="sxl:w-[100%]  md:w-[80%] h-[100%] flex flex-col items-stretch justify-between overflow-y-scroll pr-2 addScrollBar">
				<SinglePost />
				<SinglePost />
				<SinglePost />
				<SinglePost />
				<SinglePost />
				<SinglePost />
			</div>
			<SortBy />
		</div>
	);
};

export default Post;
