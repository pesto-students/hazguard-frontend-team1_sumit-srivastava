import { useEffect, useState } from "react";
import GlobalRank from "../Components/GlobalRank";
import NationalRank from "../Components/NationalRank";
import Base from "./Base";
import { leaderboardData } from "../Helpers/misc";
import { useSelector } from "react-redux";

const Leaderboard = () => {
	const [leaderboardList, setLeaderboardList] = useState();
	const accessToken = useSelector((state) => state.accessToken);
	useEffect(() => {
		const getLeaderboard = () => {
			leaderboardData(accessToken)
				.then((response) => {
					if (!response?.error) {
						setLeaderboardList(response.data);
					} else if (response?.error) {
						console.log(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to get leaderboard! Please try again!");
					console.log(e);
				});
		};
		getLeaderboard();
	}, []);
	return (
		<>
			<Base>
				<div className="w-[100%] md:h-[780px] sxl:px-[15px] md:px-[30px] py-[30px] flex sxl:flex-col md:flex-row justify-between items-center flex-wrap">
					{leaderboardList ? (
						<>
							<NationalRank leaderboardList={leaderboardList} />
							<GlobalRank leaderboardList={leaderboardList} />
						</>
					) : (
						<div className="h-[60vh] flex justify-center items-center">
							<svg
								height="200px"
								width="200px"
								version="1.1"
								id="L5"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 100 100"
								enableBackground="new 0 0 0 0"
								xmlSpace="preserve"
							>
								<circle fill="#EED132" stroke="none" cx={6} cy={50} r={6}>
									<animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
								</circle>
								<circle fill="#EED132" stroke="none" cx={30} cy={50} r={6}>
									<animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
								</circle>
								<circle fill="#EED132" stroke="none" cx={54} cy={50} r={6}>
									<animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3" />
								</circle>
							</svg>
						</div>
					)}
				</div>
			</Base>
		</>
	);
};

export default Leaderboard;
