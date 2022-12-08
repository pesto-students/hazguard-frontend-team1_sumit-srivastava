import { FullLogo } from "../Assets/library";
import { Link } from "react-router-dom";

const Header = ({ productRef, featureRef, pricingRef, aboutUsRef }) => {
	return (
		<section className="bg-white">
			<div className="sxl:px-8 md:px-16 mt-6">
				<nav className="flex items-center justify-between" aria-label="Global">
					<div className="flex" aria-label="Global">
						<img src={FullLogo} className="w-[150px] h-20" alt="app logo" />
					</div>
					<div className="hidden md:flex md:min-w-0 md:flex-1 md:justify-center md:gap-x-10">
						<div className="font-semibold text-gray-900 hover:text-gray-900">Home</div>
						<div onClick={() => productRef.current.scrollIntoView()} className="cursor-pointer font-semibold text-gray-900 hover:text-gray-900">
							Product
						</div>
						<div onClick={() => featureRef.current.scrollIntoView()} className="cursor-pointer font-semibold text-gray-900 hover:text-gray-900">
							Features
						</div>
						<div onClick={() => pricingRef.current.scrollIntoView()} className="cursor-pointer font-semibold text-gray-900 hover:text-gray-900">
							Pricing
						</div>
						<div onClick={() => aboutUsRef.current.scrollIntoView()} className="cursor-pointer font-semibold text-gray-900 hover:text-gray-900">
							About Us
						</div>
					</div>
					<div className="flex sxl:ml-4 ">
						<Link
							to="/login"
							className="inline-block w-[90px] text-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							Sign In
						</Link>
						<Link
							to="/register"
							className="ml-3 inline-block w-[90px] text-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							Sign Up
						</Link>
					</div>
				</nav>
			</div>
			<main>
				<div className="relative sxl:mt-6 md:mt-0 px-6 md:px-8">
					<div className="mx-auto max-w-3xl sm:pt-48 sm:pb-48">
						<h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Together we can make our workplaces safer!</h1>
						<p className="mt-10 text-lg leading-8 text-gray-600 sm:text-center">
							We at HazGuard aim to bring together companies across various industries on one page to help them share hazards and solutions that happen in their workplaces.
						</p>
						<div className="mt-12 flex gap-x-4 justify-center">
							<Link to="/register" className="inline-block rounded-lg bg-[#EED132] px-4 py-1.5 text-base font-semibold leading-7 text-black">
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default Header;
