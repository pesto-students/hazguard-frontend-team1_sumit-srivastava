import React from "react";
import { NavLink } from "react-router-dom";
import { BackArrow } from "../../../Assets/library";

const Post = () => {
	return (
		<div className="w-[100vw] h-[100vh] px-[15px] py-[15px] ">
			<div className="w-[100%] h-[100%] bg-[#fff] rounded-[20px] px-[20px] py-[20px] overflow-y-hidden">
				<div className="w-[100%] h-[5%] flex justify-between items-center py-[10px]">
					<NavLink to="/home">
						<img src={BackArrow} alt="back" className="" />
					</NavLink>
					<p className="font-[Arial] font-[700] text-[#677094] no:text-[12px] md:text-[20px]">Godrej Industry</p>
					<p className="font-[Arial] font-[700] text-[#677094] no:text-[12px] md:text-[20px]">20:33 30/07/2022</p>
				</div>
				<div className="w-[100%] h-[30%] flex flex-col justify-center items-start py-[20px] no:leading-[18px] md:leading-[25px]">
					<div className="font-[Arial] font-[700] text-[#677094] no:text-[15px] md:text-[24px]">Problem Statement</div>
					<div className="font-[Arial] font-[700] text-[#272343] no:text-[15px] md:text-[20px] no:leadin4rempx] md:leading-[21px] no:overflow-y-scroll md:overflow-auto">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ipsam provident sunt officiis iure beatae porro? Culpa voluptatem ipsa, facere in iste officiis est voluptas!
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, reiciendis saepe! Nostrum, amet? Laborum, molestiae distinctio? Numquam voluptates libero consequuntur.
					</div>
				</div>
				<div className="w-[100%] h-[65%] flex justify-center items-start flex-wrap">
					<div className="no:w-[100%] md:w-[50%] no:h-[70%] md:h-[100%] overflow-y-scroll">
						<div className="font-[Arial] font-[700] text-[#677094] no:text-[15px] md:text-[24px] no:leading-[19px] md:leading-[25px]">Solution</div>
						<div className="font-[Arial] font-[700] text-[#677094] no:text-[15px] md:text-[18px] no:leading-[17px] md:leading-[20px] py-[10px]">
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
					<div className="no:w-[100%] md:w-[50%] no:h-[30%] md:h-[90%] flex flex-wrap justify-center items-start self-center overflow-y-scroll">
						<img src="../../../../public/image1.jpg" alt="" className="no:w-[50%] no:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src="../../../../public/image2.jpg" alt="" className="no:w-[50%] no:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src="../../../../public/image3.jpg" alt="" className="no:w-[50%] no:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src="../../../../public/image4.jpg" alt="" className="no:w-[50%] no:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src="../../../../public/image3.jpg" alt="" className="no:w-[50%] no:h-[100%] md:w-[50%] md:h-[50%]" />
						<img src="../../../../public/image2.jpg" alt="" className="no:w-[50%] no:h-[100%] md:w-[50%] md:h-[50%]" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
