import SinglePost from "./SinglePost";
import { NoResult } from "../Assets/library";

const Post = ({ hazards, fromMyPosts }) => {
	return (
		<div className="w-[100vw] mt-[5px] mb-[15px] flex justify-between items-center sxl:px-[15px] md:px-[30px]">
			<div className="w-[100%] h-[100%] flex flex-col items-stretch justify-start">
				{hazards.length > 0 ? (
					hazards.map((data) => {
						return <SinglePost key={data._id} data={data} fromMyPosts={fromMyPosts} />;
					})
				) : (
					<div className="flex flex-col justify-center items-center">
						<img src={NoResult} alt="no results" className="mt-14 h-80" />
						<h1 className="mt-10 font-bold text-5xl">No results found!</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Post;
