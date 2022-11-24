import { Link, useNavigate } from "react-router-dom";
import { Account, Hamburger, Logout, Filter, BackArrow } from "../Assets/library";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SideSortBy from "./SideSortBy";
import { logout } from "../Helpers/auth";
import { setInitialState } from "../Store/storingData";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Navbar() {
	//State management for Sidebar sliders for Smaller width devices
	const [isNavOpen, setNavOpen] = useState(false);
	const [isFilterOpen, setFilterOpen] = useState(false);

	//Hook to get current page for styling
	const location = useLocation().pathname;

	//Hook to navigate through different pages
	const navigate = useNavigate();

	//State management: Redux Store
	const dispatch = useDispatch();
	const refreshToken = useSelector((state) => state.refreshToken);
	const userData = useSelector((state) => state.userData);

	//Signout Button handler
	const signOut = (e) => {
		e.preventDefault();
		logout(refreshToken)
			.then(async (response) => {
				if (!response?.error) {
					dispatch(setInitialState(""));
					navigate("/login");
					toast.success("You are logged out!");
				} else if (response?.error) {
					return toast.error(response?.message);
				}
			})
			.catch((e) => {
				toast.error("Not able to log out! Please try again!");
				console.log(e);
			});
	};
	return (
		<div className="w-[100vw] sxl:h-[100px] md:h-[120px] sxl:mt-[15px] md:mt-[30px] flex flex-row sxl:px-[15px] md:px-[30px]">
			<div className="sxl:w-[100%] md:w-[80%] h-[100%] bg-[#272343] rounded-[20px] flex overflow-hidden md:mr-[30px]">
				<nav className="h-[100%] w-[100%] flex flex-row justify-between items-center px-5">
					<div className="md:hidden ml-[30px] cursor-pointer">
						<img
							src={Hamburger}
							alt="Hamburger"
							className="w-[3em] h-[3em]"
							onClick={() => {
								setNavOpen(!isNavOpen);
							}}
						/>
					</div>
					<ul className="w-[50%] sxl:hidden md:flex flex-row justify-between items-center text-[#FFFFFF] text-xl font-semibold">
						<li className={`px-3 py-1 ${location === "/home" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/home">Home</Link>
						</li>
						<li className={`px-3 py-1 ${location === "/addhazard" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/addhazard">Share</Link>
						</li>
						<li className={`px-3 py-1 ${location === "/saved" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/saved">Saved</Link>
						</li>
						<li className={`px-3 py-1 ${location === "/myposts" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/myposts">My Posts</Link>
						</li>
						<li className={`px-3 py-1 ${location === "/leaderboard" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/leaderboard">Leaderboard</Link>
						</li>
					</ul>
					{isNavOpen && (
						<div className="absolute top-0 left-0 w-[40vw] h-[100%] bg-[#fff] shadow-[4px_0px_4px_rgba(0,0,0,0.25)] px-[20px] py-[20px]">
							<Link to="/home">
								<img
									src={BackArrow}
									alt="back"
									className=""
									onClick={() => {
										setNavOpen(!isNavOpen);
									}}
								/>
							</Link>
							<ul className="h-[60%] flex flex-col justify-center items-center">
								<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
									<Link to="/home">Home</Link>
								</li>
								<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
									<Link to="/addhazard">Share</Link>
								</li>
								<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
									<Link to="/saved">Saved</Link>
								</li>
								<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
									<Link to="/myposts">My Post</Link>
								</li>
								<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
									<Link to="/account">Account</Link>
								</li>
								<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
									<Link to="/login">Logout</Link>
								</li>
							</ul>
						</div>
					)}
					{isFilterOpen && (
						<div className="absolute top-0 right-0 w-[50vw] h-[100%] bg-[#fff] shadow-[-4px_0px_4px_rgba(0,0,0,0.25)] px-[20px] py-[20px]">
							<Link to="/home">
								<img
									src={BackArrow}
									alt="back"
									className="rotate-180"
									onClick={() => {
										setFilterOpen(!isFilterOpen);
									}}
								/>
							</Link>
							<SideSortBy />
						</div>
					)}
					<ul className="flex flex-row justify-between items-center">
						<li className="mr-[34px] cursor-pointer sxl:hidden md:inline">
							<button type="button" onClick={(e) => signOut(e)} className="flex justify-center items-center">
								<img src={Logout} alt="Logout" className="sxl:w-[3em] sxl:h-[3em] md:w-[2.5em]" />
							</button>
						</li>
						<li className="mr-[34px] cursor-pointer sxl:inline md:hidden ">
							<button type="button" onClick={(e) => setFilterOpen(!isFilterOpen)} className="flex justify-center items-center">
								<img src={Filter} alt="Logout" className="sxl:w-[3em] sxl:h-[3em] md:w-[2.5em]" />
							</button>
						</li>
						<li className="mr-[34px] cursor-pointer">
							<Link to="/account">
								<img src={Account} alt="Account" className="sxl:w-[3em] sxl:h-[3em] md:w-[2.5em]" />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="sxl:hidden md:w-[20%] h-[100%] bg-[#FFFFFF] rounded-[20px] md:flex overflow-hidden justify-center items-center px-[20px]">
				<div className="min-w-[70px] min-h-[70px] rounded-[50%] bg-[#272343] flex justify-center items-center">
					<p className="text-[#FFF] text-[35px]">G</p>
				</div>
				<div className="sxl:hidden lg:flex flex-col justify-center items-start ml-[10px] w-[80%]">
					<p className="text-[1.4em] text-[#677094]">Hello,</p>
					<p className="text-[1.4em] font-[700] text-[#272343]">{userData?.firstName}</p>
				</div>
			</div>
		</div>
	);
}
