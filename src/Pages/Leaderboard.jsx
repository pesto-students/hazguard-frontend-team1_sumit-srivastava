import GlobalRank from "../Components/GlobalRank";
import NationalRank from "../Components/NationalRank";
import Base from "./Base";

const Leaderboard = () => {
	return (
		<>
			<Base>
				<div className="w-[100%] md:h-[780px] sxl:px-[15px] md:px-[30px] py-[30px] flex sxl:flex-col md:flex-row justify-between items-center flex-wrap">
					<NationalRank />
					<GlobalRank />
				</div>
			</Base>
		</>
	);
};

export default Leaderboard;
