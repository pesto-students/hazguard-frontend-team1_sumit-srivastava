import React from "react";
import { NavLink } from "react-router-dom";
import { BackArrow } from "../../../Assets/library";
import {classes} from './classes'

const Post = () => {
	return (
		<div className={classes.page.body}>
			<div className={classes.page.card.body}>
				<div className={classes.page.card.heading.body}>
					<NavLink to="/home">
						<img src={BackArrow} alt="back" />
					</NavLink>
					<p className={classes.page.card.heading.name}>Godrej Industry</p>
					<p className={classes.page.card.heading.date}>20:33 30/07/2022</p>
				</div>
				<div className={classes.page.card.problem.body}>
					<div className={classes.page.card.problem.title}>Problem Statement</div>
					<div className={classes.page.card.problem.statement}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ipsam provident sunt officiis iure beatae porro? Culpa voluptatem ipsa, facere in iste officiis est voluptas!
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, reiciendis saepe! Nostrum, amet? Laborum, molestiae distinctio? Numquam voluptates libero consequuntur.
					</div>
				</div>
				<div className={classes.page.card.solution.body}>
					<div className={classes.page.card.solution.text.body}>
						<div className={classes.page.card.solution.text.title}>Solution</div>
						<div className={classes.page.card.solution.text.statement}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim qui, fuga tenetur dolorum dicta unde culpa esse magnam quae nulla nam necessitatibus, porro nostrum
							tempore alias pariatur eos maiores, asperiores rem aliquam? A vitae praesentium sit autem facere reiciendis voluptatum quisquam, cumque non sed accusantium, sapiente dolore
							nisi excepturi minus quas ut molestias aliquam saepe maxime repellendus eius cupiditate quos labore! Dicta sed eum alias recusandae, voluptatum expedita provident, deserunt
							debitis, placeat velit dolor repellat voluptate ipsum? Iste veritatis temporibus ex laboriosam? Suscipit aspernatur natus enim perferendis quisquam, illum accusantium
							itaque magni ut distinctio qui dolorum earum architecto molestias. Delectus, facilis provident in commodi modi, qui unde ratione sapiente minima, error labore nostrum at
							nihil alias distinctio saepe rem veniam iusto ex consequatur quia! Sint facere amet minima. Dolor sint ea, tenetur similique neque atque. Quidem, cumque blanditiis, aut
							molestias nam ratione architecto eligendi reprehenderit minima, labore possimus veritatis facere. Saepe sit non hic! Sequi, molestias. Blanditiis adipisci delectus
							asperiores vero tempore perspiciatis voluptas totam, quia accusamus alias at eaque voluptatibus similique iure quos ullam voluptate? Hic iusto alias in, eaque quasi ad
							nobis tempora quo, dicta enim dolor tenetur recusandae dolores! Non minus, aliquid odio, velit, corporis sit autem laudantium odit facere provident magni. Veniam
							temporibus, cumque assumenda nam voluptas atque magnam maiores sed eius aliquid quis, aperiam reprehenderit ab rerum cum voluptatem doloremque odio eum aut inventore?
							Exercitationem incidunt quaerat, nemo hic quos error libero commodi delectus amet dignissimos nobis porro, optio tenetur id voluptas est fugiat!
						</div>
					</div>
					<div className={classes.page.card.solution.image.body}>
						<img src="../../../../public/image1.jpg" alt="" className={classes.page.card.solution.image.singleImage} />
						<img src="../../../../public/image2.jpg" alt="" className={classes.page.card.solution.image.singleImage} />
						<img src="../../../../public/image3.jpg" alt="" className={classes.page.card.solution.image.singleImage} />
						<img src="../../../../public/image4.jpg" alt="" className={classes.page.card.solution.image.singleImage} />
						<img src="../../../../public/image3.jpg" alt="" className={classes.page.card.solution.image.singleImage} />
						<img src="../../../../public/image2.jpg" alt="" className={classes.page.card.solution.image.singleImage} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
