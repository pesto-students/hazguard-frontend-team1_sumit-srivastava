import React, { useState } from "react";
import { classes } from "./classes";
import { NavLink } from "react-router-dom";
import { Account, Hamburger, Logout, Filter } from "../../Assets/library";

export default function Navbar() {
	const [currentPage, setCurrentPage] = useState("");
	return (
		<div className={classes.navContainer.body}>
			<div className={classes.navContainer.navbar.body}>
				<nav className={classes.navContainer.navbar.navlinks}>
					<div className={classes.navContainer.navbar.hamburger}>
						<Hamburger />
					</div>
					<ul className={classes.navContainer.navbar.linklist}>
						<li className={`${classes.navContainer.navbar.page} ${currentPage === "Home" ? "bg-[#FFFFFF] rounded-[20px] text-[#272343]" : ""}`}>
							<NavLink
								to="/home"
								onClick={(event) => {
									setCurrentPage("Home");
								}}
							>
								Home
							</NavLink>
						</li>
						<li className={`${classes.navContainer.navbar.page} ${currentPage === "Share" ? "bg-[#FFFFFF] rounded-[20px] text-[#272343]" : ""}`}>
							<NavLink
								to="/share"
								onClick={(event) => {
									setCurrentPage("Share");
								}}
							>
								Share
							</NavLink>
						</li>
						<li className={`${classes.navContainer.navbar.page} ${currentPage === "Saved" ? "bg-[#FFFFFF] rounded-[20px] text-[#272343]" : ""}`}>
							<NavLink
								to="/saved"
								onClick={(event) => {
									setCurrentPage("Saved");
								}}
							>
								Saved
							</NavLink>
						</li>
						<li className={`${classes.navContainer.navbar.page} ${currentPage === "Pricing" ? "bg-[#FFFFFF] rounded-[20px] text-[#272343]" : ""}`}>
							<NavLink
								to="/pricing"
								onClick={(event) => {
									setCurrentPage("Pricing");
								}}
							>
								Pricing
							</NavLink>
						</li>
					</ul>
					<ul className={classes.navContainer.iconlist.body}>
						<li className={classes.navContainer.iconlist.logIcons}>
							<NavLink to="/login">
								<Logout />
							</NavLink>
						</li>
						<li className={classes.navContainer.iconlist.filIcons}>
							<Filter />
						</li>
						<li className={classes.navContainer.iconlist.icons}>
							<NavLink to="/account">
								<Account />
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
