import React from "react";
import Filter from "../Components/Filter";
import Post from "../Components/Post";
import Base from "./Base";

const Saved = () => {
	return (
		<Base>
			<div className="w-[100vw] h-[100vh] overflow-hidden">
				<Filter />
				<Post />
			</div>
		</Base>
	);
};

export default Saved;
