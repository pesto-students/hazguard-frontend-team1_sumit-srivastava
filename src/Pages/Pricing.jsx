import InternationCard from "../Components/InternationCard";
import NationalCard from "../Components/NationalCard";
import Base from "./Base";

const Pricing = () => {
	return (
		<>
			<Base>
				<div className="w-[100%] md:h-[780px] no:px-[15px] md:px-[30px] py-[30px] flex no:flex-col md:flex-row justify-between items-center flex-wrap">
					<NationalCard />
					<InternationCard />
				</div>
			</Base>
		</>
	);
};

export default Pricing;
