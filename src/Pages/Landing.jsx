import Header from "../Components/Header";
import Product from "../Components/Product";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Pricing from "../Components/Pricing";
import AboutUs from "../Components/AboutUs";

const Landing = () => {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header />
			<Product />
			<Features />
			<Pricing />
			{/* <AboutUs /> */}
			{/* <Footer /> */}
		</div>
	);
};

export default Landing;
