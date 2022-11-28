import { FullLogo } from "../Assets/library";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<section className="bg-white">
			<div className="px-16 mt-6">
				<nav className="flex items-center justify-between" aria-label="Global">
					<div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
						<img src={FullLogo} className="h-20" alt="app logo" />
					</div>
					<div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-10">
						<a href="#" className="font-semibold text-gray-900 hover:text-gray-900">
							Home
						</a>
						<a href="#" className="font-semibold text-gray-900 hover:text-gray-900">
							Product
						</a>
						<a href="#" className="font-semibold text-gray-900 hover:text-gray-900">
							Features
						</a>
						<a href="#" className="font-semibold text-gray-900 hover:text-gray-900">
							Pricing
						</a>
						<a href="#" className="font-semibold text-gray-900 hover:text-gray-900">
							About Us
						</a>
					</div>
					<div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
						<Link to="/login" className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Sign In
						</Link>
						<Link
							to="/register"
							className="ml-3 inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							Sign Up
						</Link>
					</div>
				</nav>
			</div>
			<main>
				<div className="relative px-6 lg:px-8">
					<div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-28 sm:pb-40">
						<h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Together we can make our workplaces safer!</h1>
						<p className="mt-10 text-lg leading-8 text-gray-600 sm:text-center">
							We at HazGuard aim to bring together companies across various industries on one page to help them share hazards and solutions that happen in their workplaces.
						</p>
						<div className="mt-12 flex gap-x-4 sm:justify-center">
							<Link to="/register" className="inline-block rounded-lg bg-[#EED132] px-4 py-1.5 text-base font-semibold leading-7 text-black">
								Get Started
							</Link>
							<Link to="/demo" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
								Live Demo
							</Link>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default Header;
