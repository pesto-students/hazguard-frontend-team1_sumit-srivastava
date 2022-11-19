import SortBy from "../SortBy/SortBy";
import React from "react";
import SinglePost from "../SinglePost/SinglePost";
import { classes } from "./classes";

const Post = () => {
	return (
		<div className={classes.body}>
			<div className={classes.left}>
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
