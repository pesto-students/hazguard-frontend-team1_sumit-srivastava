import React from "react";
import { NavLink } from "react-router-dom";
import { Account, Hamburger, Logout, Filter, BackArrow } from "../Assets/library";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter, toggleNavbar } from "../Store/Actions/Actions";
import SideSortBy from "./SideSortBy";

export default function Navbar() {
	//function to get a current path location
	const getPath = () => {
		const location = useLocation().pathname;
		return location;
	};
	const path = getPath();

	//navigation style for navbar links
	const pageStyle = "rounded-[20px] text-[#272343] bg-[#FFFFFF]";

	//getting state from store
	const navbar = useSelector((state) => state.navbarReducer);
	const dispatch = useDispatch();

	console.log(navbar.navbar, navbar.toggle);

	return (
		<div className="w-[100vw] h-[120px] no:mt-[15px] md:mt-[30px] flex flex-row no:px-[15px] md:px-[30px]">
			<div className="no:w-[100%] md:w-[80%] h-[100%] bg-[#272343] rounded-[20px] flex overflow-hidden md:mr-[30px]">
				<nav className="h-[100%] w-[100%] flex flex-row justify-between items-center">
					<div className="md:hidden ml-[30px] cursor-pointer">
						<img src={Hamburger} alt="Hamburger" className="w-[3em] h-[3em]" onClick={() => dispatch(toggleNavbar())} />
					</div>
					<ul className="w-[40%] no:hidden md:flex flex-row justify-between items-center font-[Arial] text-[#FFFFFF] text-[25px] font-[700] pl-[10px]">
						<li className={`mx-[10px] min-w-[80px] w-[100px] text-center cursor-pointer ${path === "/home" ? pageStyle : ""}`}>
							<NavLink to="/home">Home</NavLink>
						</li>
						<li className={`mx-[10px] min-w-[80px] w-[100px] text-center cursor-pointer ${path === "/share" ? pageStyle : ""}`}>
							<NavLink to="/share">Share</NavLink>
						</li>
						<li className={`mx-[10px] min-w-[80px] w-[100px] text-center cursor-pointer ${path === "/saved" ? pageStyle : ""}`}>
							<NavLink to="/saved">Saved</NavLink>
						</li>
						<li className={`mx-[10px] min-w-[80px] w-[100px] text-center cursor-pointer ${path === "/pricing" ? pageStyle : ""}`}>
							<NavLink to="/pricing">Pricing</NavLink>
						</li>
					</ul>
					{navbar.navbar && (
						<div className="absolute top-0 left-0 w-[50vw] h-[100%] bg-[#fff] shadow-[4px_0px_4px_rgba(0,0,0,0.25)] px-[20px] py-[20px]">
							<NavLink to="/home">
								<img src={BackArrow} alt="back" onClick={() => dispatch(toggleNavbar())} className="" />
							</NavLink>
							<ul className="w-[80%] h-[60%] flex flex-col justify-center items-center">
								<li className="mb-[20px] font-[700] font-[Arial] text-[#677094] text-[20px]">
									<NavLink to="/home" onClick={() => dispatch(toggleNavbar())}>
										Home
									</NavLink>
								</li>
								<li className="mb-[20px] font-[700] font-[Arial] text-[#677094] text-[20px]">
									<NavLink to="/share" onClick={() => dispatch(toggleNavbar())}>
										Share
									</NavLink>
								</li>
								<li className="mb-[20px] font-[700] font-[Arial] text-[#677094] text-[20px]">
									<NavLink to="/saved" onClick={() => dispatch(toggleNavbar())}>
										Saved
									</NavLink>
								</li>
								<li className="mb-[20px] font-[700] font-[Arial] text-[#677094] text-[20px]">
									<NavLink to="/pricing" onClick={() => dispatch(toggleNavbar())}>
										Pricing
									</NavLink>
								</li>
								<li className="mb-[20px] font-[700] font-[Arial] text-[#677094] text-[20px]">
									<NavLink to="/account" onClick={() => dispatch(toggleNavbar())}>
										Account
									</NavLink>
								</li>
								<li className="mb-[20px] font-[700] font-[Arial] text-[#677094] text-[20px]">
									<NavLink to="/login" onClick={() => dispatch(toggleNavbar())}>
										Logout
									</NavLink>
								</li>
							</ul>
						</div>
					)}
					{navbar.toggle && (
						<div className="absolute top-0 right-0 w-[50vw] h-[100%] bg-[#fff] shadow-[-4px_0px_4px_rgba(0,0,0,0.25)] px-[20px] py-[20px]">
							<NavLink to="/home">
								<img src={BackArrow} alt="back" onClick={() => dispatch(toggleFilter())} className="rotate-180" />
							</NavLink>
							<SideSortBy />
						</div>
					)}
					<ul className="flex flex-row justify-between items-center">
						<li className="mr-[34px] cursor-pointer no:hidden md:inline">
							<NavLink to="/login">
								<img src={Logout} alt="Logout" className="no:w-[3em] no:h-[3em] md:w-[2.5em]" />
							</NavLink>
						</li>
						<li className="mr-[34px] cursor-pointer no:inline md:hidden">
							<img
								src={Filter}
								alt="Filter"
								className="no:w-[3em] no:h-[3em]"
								onClick={() => {
									dispatch(toggleFilter());
								}}
							/>
						</li>
						<li className="mr-[34px] cursor-pointer">
							<NavLink to="/account">
								<img src={Account} alt="Account" className="no:w-[3em] no:h-[3em] md:w-[2.5em]" />
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div className="no:hidden md:w-[20%] h-[100%] bg-[#FFFFFF] rounded-[20px] md:flex overflow-hidden justify-center items-center px-[20px]">
				<div className="min-w-[70px] min-h-[70px] rounded-[50%] bg-[#272343] flex justify-center items-center">
					<p className="text-[#FFF] text-[35px]">G</p>
				</div>
				<div className="no:hidden lg:flex flex-col justify-center items-start ml-[10px] w-[80%]">
					<p className="text-[1.4em] text-[#677094]">Hello,</p>
					<p className="text-[1.4em] font-[700] text-[#272343]">CompanyName</p>
				</div>
			</div>
		</div>
	);
}
