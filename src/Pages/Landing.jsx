import Header from "../Components/Header";
import Product from "../Components/Product";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Pricing from "../Components/Pricing";
import AboutUs from "../Components/AboutUs";
import { useRef } from "react";

const Landing = () => {
	const productRef = useRef(null);
	const featureRef = useRef(null);
	const pricingRef = useRef(null);
	const aboutUsRef = useRef(null);
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header productRef={productRef} featureRef={featureRef} pricingRef={pricingRef} aboutUsRef={aboutUsRef} />
			<Product productRef={productRef} />
			<Features featureRef={featureRef} />
			<Pricing pricingRef={pricingRef} />
			<AboutUs aboutUsRef={aboutUsRef} />
			<Footer />
		</div>
	);
};

export default Landing;
