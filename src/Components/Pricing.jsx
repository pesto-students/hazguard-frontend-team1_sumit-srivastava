import NationalCard from "./NationalCard";
import InternationalCard from "./InternationalCard";
const Pricing = () => {
	return (
		<section className="max-w-8xl px-16 bg-white pb-16">
			<h1 className="text-5xl text-center my-16 font-bold">Pricing</h1>
			<div className="flex justify-between">
				<NationalCard />
				<InternationalCard />
			</div>
		</section>
	);
};

export default Pricing;
