import React from "react";
import { Views, Bookmark } from "../../Assets/library";
import {classes} from './classes'

const SinglePost = () => {
	return (
		<div className={classes.body}>
			<div className={classes.headline}>
				<p>Godrej Industry</p>
				<p>20:33 30/07/2022</p>
			</div>
			<div className={classes.problem}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor accusantium numquam exercitationem officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Perspiciatis provident tenetur dolorem iure atque at ex iste illum tempora voluptate!
			</div>
			<div className={classes.footer.body}>
				<p className={classes.footer.type}>Hazard Type: Safety</p>
				<div className={classes.footer.buttonBody.body}>
					<div className={classes.footer.buttonBody.views.body}>
						<Views />
						<p className={classes.footer.buttonBody.views.text}>107</p>
					</div>
					<button className={classes.footer.buttonBody.solution}>Solution</button>
					<button className={classes.footer.buttonBody.bookmark}>
						<Bookmark />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
