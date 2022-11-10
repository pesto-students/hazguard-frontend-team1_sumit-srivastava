import React, { useState } from "react";
import { classes } from "./css/classes";
import { NavLink } from "react-router-dom";
import Logout from "../../Assets/Logout";
import Account from "../../Assets/Account";
import Hamburger from "../../Assets/Hamburger";

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
						<li className={classes.navContainer.iconlist.icons}>
							<NavLink to="/login">
								<Logout />
							</NavLink>
						</li>
						<li className={classes.navContainer.iconlist.icons}>
							<NavLink to="/account">
								<Account />
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div className={classes.profileBoard.body}></div>
		</div>
	);
}
