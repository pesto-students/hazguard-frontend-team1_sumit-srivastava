import React, { useState } from "react";
import { classes } from "./classes";
import { NavLink } from "react-router-dom";
import { Account, Hamburger, Logout, Filter, BackArrow } from "../../Assets/library";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter, toggleNavbar } from "../../Store/Actions/Actions";
import SideSortBy from "../SortBy/SideSortBy";

export default function Navbar() {
	//function to get a current path location
	const getPath = () => {
		const location = useLocation().pathname;
		return location;
	};
	const path = getPath();

	//navigation style for navbar links
	const pageStyle = " rounded-[20px] text-[#272343] bg-[#FFFFFF]";

	//getting state from store
	const navbar = useSelector((state) => state.navbarReducer);
	const dispatch = useDispatch();

	console.log(navbar.navbar, navbar.toggle);

	return (
		<div className={classes.navContainer.body}>
			<div className={classes.navContainer.navbar.body}>
				<nav className={classes.navContainer.navbar.navlinks}>
					<div className="md:hidden ml-[30px] cursor-pointer">
						<img src={Hamburger} alt="Hamburger" className="w-[3em] h-[3em]" onClick={() => dispatch(toggleNavbar())} />
					</div>
					<ul className={classes.navContainer.navbar.linklist}>
						<li className={`${classes.navContainer.navbar.page}${path === "/home" ? pageStyle : ""}`}>
							<NavLink to="/home">Home</NavLink>
						</li>
						<li className={`${classes.navContainer.navbar.page}${path === "/share" ? pageStyle : ""}`}>
							<NavLink to="/share">Share</NavLink>
						</li>
						<li className={`${classes.navContainer.navbar.page}${path === "/saved" ? pageStyle : ""}`}>
							<NavLink to="/saved">Saved</NavLink>
						</li>
						<li className={`${classes.navContainer.navbar.page}${path === "/pricing" ? pageStyle : ""}`}>
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
							<SideSortBy/>
						</div>
					)}
					<ul className={classes.navContainer.iconlist.body}>
						<li className={classes.navContainer.iconlist.logIcons}>
							<NavLink to="/login">
								<img src={Logout} alt="Logout" className="no:w-[3em] no:h-[3em] md:w-[2.5em]" />
							</NavLink>
						</li>
						<li className={classes.navContainer.iconlist.filIcons}>
							<img
								src={Filter}
								alt="Filter"
								className="no:w-[3em] no:h-[3em]"
								onClick={() => {
									dispatch(toggleFilter());
								}}
							/>
						</li>
						<li className={classes.navContainer.iconlist.icons}>
							<NavLink to="/account">
								<img src={Account} alt="Account" className="no:w-[3em] no:h-[3em] md:w-[2.5em]" />
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div className={classes.profileBoard.body}>
				<div className={classes.profileBoard.profileIcon.body}>
					<p className={classes.profileBoard.profileIcon.icon}>G</p>
				</div>
				<div className={classes.profileBoard.nameText.body}>
					<p className={classes.profileBoard.nameText.Hello}>Hello,</p>
					<p className={classes.profileBoard.nameText.CompName}>CompanyName</p>
				</div>
			</div>
		</div>
	);
}
