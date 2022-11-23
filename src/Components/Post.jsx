import SortBy from "./SortBy";
import SinglePost from "./SinglePost";

const Post = () => {
	return (
		<div className="w-[100vw] h-[720px] mt-[30px] flex justify-between items-center no:px-[15px] md:px-[30px]">
			<div className="no:w-[100%]  md:w-[80%] h-[100%] flex flex-col items-stretch justify-between overflow-y-scroll removeScrollbar">
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
