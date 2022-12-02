import { useState } from "react";
import { useSelector } from "react-redux";

const NationalRank = ({ leaderboardList }) => {
	const userData = useSelector((state) => state.userData);
	const [userRank, setUserRank] = useState(
		leaderboardList
			.filter((data) => data.country === userData.country)
			.sort((a, b) => b.postCount - a.postCount)
			.map((data, index) => {
				return { ...data, rank: index + 1 };
			})
			.filter((data) => data.userId === userData.userId)[0]
	);
	return (
		<>
			{leaderboardList.length > 0 ? (
				<div className="sxl:w-[100%] sxl:mt-[30px] md:w-[48%] md:mt-0 sxl:h-[50%] md:h-[100%] bg-gradient-to-tl from-[#180F55,60%] to-[#6A718F] rounded-[20px] flex flex-col justify-between items-center">
					<div className="w-[100%] h-[60px] bg-[#272343] rounded-t-[20px] flex justify-center items-center font-[700] text-[#fff] sxl:text-[18px] md:text-[20px]">National Ranks</div>
					<div className="w-[100%] h-[calc(100%-60px)] flex flex-col justify-start pt-5 items-center">
						<div className="flex font-[700] lg:text-[16px] md:text-[13px] text-[#EED132] justify-between w-[80%]">
							<div>Rank</div>
							<div>Industry Name</div>
							<div>Posts</div>
						</div>
						<div
							key={userRank._id}
							className="flex font-[700] lg:text-[16px] md:text-[13px] text-[#fff] border-b-[1px] border-b-solid justify-between w-[80%] bg-transparent mt-[5px] px-[5px] py-[5px] bg-[#EED132]"
						>
							<div>{userRank.rank}</div>
							<div>{userRank.companyName}</div>
							<div>{userRank.postCount}</div>
						</div>
						{leaderboardList
							.filter((data) => data.country === userData.country)
							.sort((a, b) => b.postCount - a.postCount)
							.map((data, index) => {
								return (
									<div
										key={data._id}
										className={`flex font-[700] lg:text-[16px] md:text-[13px] text-[#fff] border-b-[1px] border-b-solid justify-between w-[80%] bg-transparent mt-[5px] px-[5px] py-[5px] ${
											data.userId === userData.userId && "bg-[#EED132]"
										}`}
									>
										<div>{index + 1}</div>
										<div>{data.companyName}</div>
										<div>{data.postCount}</div>
									</div>
								);
							})}
					</div>
				</div>
			) : (
				<h1>Not enough data!</h1>
			)}
		</>
	);
};

export default NationalRank;
