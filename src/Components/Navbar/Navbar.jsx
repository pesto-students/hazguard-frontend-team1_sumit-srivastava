import React, { useState } from "react";
import { classes } from "./classes";
import { NavLink } from "react-router-dom";
import { Account, Hamburger, Logout, Filter } from "../../Assets/library";
import { useLocation } from "react-router-dom";

export default function Navbar() {
	//function to get a current path location
	const getPath = () => {
		const location = useLocation().pathname;
		return location;
	};
	const path = getPath();

	//navigation style for navbar links
	const pageStyle = " rounded-[20px] text-[#272343] bg-[#FFFFFF]";

	return (
		<div className={classes.navContainer.body}>
			<div className={classes.navContainer.navbar.body}>
				<nav className={classes.navContainer.navbar.navlinks}>
					<div className="md:hidden ml-[30px] cursor-pointer">
						<img src={Hamburger} alt="Hamburger" className="w-[4em] h-[4em]" />
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
					<ul className={classes.navContainer.iconlist.body}>
						<li className={classes.navContainer.iconlist.logIcons}>
							<NavLink to="/login">
								<img src={Logout} alt="Logout" className="no:w-[4em] no:h-[4em] md:w-[3em]" />
							</NavLink>
						</li>
						<li className={classes.navContainer.iconlist.filIcons}>
							<img src={Filter} alt="Filter" className="no:w-[4em] no:h-[4em]" />
						</li>
						<li className={classes.navContainer.iconlist.icons}>
							<NavLink to="/account">
								<img src={Account} alt="Account" className="no:w-[4em] no:h-[4em] md:w-[3em]" />
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
