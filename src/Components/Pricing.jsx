import NationalCard from "./NationalCard";
import InternationalCard from "./InternationalCard";

const Pricing = ({ pricingRef }) => {
	return (
		<section ref={pricingRef} className="px-16 bg-white pb-16">
			<h1 className="text-5xl text-center my-16 font-bold">Pricing</h1>
			<div className="flex justify-between items-center sxl:flex-wrap md:flex-nowrap">
				<NationalCard fromLanding={true} />
				<div className="w-28"></div>
				<InternationalCard fromLanding={true} />
			</div>
		</section>
	);
};

export default Pricing;
