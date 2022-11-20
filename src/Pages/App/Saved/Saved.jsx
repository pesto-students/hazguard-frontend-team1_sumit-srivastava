import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Filter from "../../../Components/Filter/Filter";
import Post from "../../../Components/Post/Post";

const Saved = () => {
	return (
		<div className="w-[100vw] h-[100vh] overflow-hidden">
			<Navbar />
			<Filter />
			<Post />
		</div>
	);
};

export default Saved;
