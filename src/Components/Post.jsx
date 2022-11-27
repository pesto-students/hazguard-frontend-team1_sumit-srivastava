import SortBy from "./SortBy";
import SinglePost from "./SinglePost";

const Post = ({ values, setValues, sort, hazards, fromMyPosts }) => {
	return (
		<div className="w-[100vw] h-[600px] mt-[30px] flex justify-between items-center sxl:px-[15px] md:px-[30px]">
			<div className="sxl:w-[100%] md:w-[80%] h-[100%] flex flex-col items-stretch justify-start overflow-y-scroll pr-2 addScrollBar">
				{hazards.length > 0 ? (
					hazards.map((data) => {
						return <SinglePost key={data._id} data={data} fromMyPosts={fromMyPosts} />;
					})
				) : (
					<h1>No results found!</h1>
				)}
			</div>
			<SortBy values={values} setValues={setValues} sort={sort} />
		</div>
	);
};

export default Post;
