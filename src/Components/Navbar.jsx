import { Link, useNavigate } from "react-router-dom";
import { Account, Hamburger, Logout, Filter, BackArrow } from "../Assets/library";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SideSortBy from "./SideSortBy";
import { logout } from "../Helpers/auth";
import { setAccessToken, setRefreshToken, setUserData } from "../Store/storingData";
import { toast } from "react-toastify";

export default function Navbar() {
	const location = useLocation().pathname;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const refreshToken = useSelector((state) => state.refreshToken);
	const userData = useSelector((state) => state.userData);
	const signOut = (e) => {
		e.preventDefault();
		logout(refreshToken)
			.then(async (response) => {
				if (!response?.error) {
					dispatch(setUserData(""));
					dispatch(setAccessToken(""));
					dispatch(setRefreshToken(""));
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
		<div className="w-[100vw] h-[120px] no:mt-[15px] md:mt-[30px] flex flex-row no:px-[15px] md:px-[30px]">
			<div className="no:w-[100%] md:w-[80%] h-[100%] bg-[#272343] rounded-[20px] flex overflow-hidden md:mr-[30px]">
				<nav className="h-[100%] w-[100%] flex flex-row justify-between items-center px-5">
					<div className="md:hidden ml-[30px] cursor-pointer">
						<img src={Hamburger} alt="Hamburger" className="w-[3em] h-[3em]" />
					</div>
					<ul className="w-[40%] no:hidden md:flex flex-row justify-between items-center text-[#FFFFFF] text-2xl font-semibold">
						<li className={`px-4 py-1 ${location === "/home" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/home">Home</Link>
						</li>
						<li className={`px-4 py-1 ${location === "/share" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/share">Share</Link>
						</li>
						<li className={`px-4 py-1 ${location === "/saved" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/saved">Saved</Link>
						</li>
						<li className={`px-4 py-1 ${location === "/pricing" ? "rounded-2xl text-[#272343] bg-[#FFFFFF]" : ""}`}>
							<Link to="/pricing">Pricing</Link>
						</li>
					</ul>
					{/* <div className="absolute top-0 left-0 w-[40vw] h-[100%] bg-[#fff] shadow-[4px_0px_4px_rgba(0,0,0,0.25)] px-[20px] py-[20px]">
						<Link to="/home">
							<img src={BackArrow} alt="back" className="" />
						</Link>
						<ul className="h-[60%] flex flex-col justify-center items-center">
							<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
								<Link to="/home">Home</Link>
							</li>
							<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
								<Link to="/share">Share</Link>
							</li>
							<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
								<Link to="/saved">Saved</Link>
							</li>
							<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
								<Link to="/pricing">Pricing</Link>
							</li>
							<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
								<Link to="/account">Account</Link>
							</li>
							<li className="mb-[20px] font-[700] text-[#677094] text-[20px]">
								<Link to="/login">Logout</Link>
							</li>
						</ul>
					</div>
					<div className="absolute top-0 right-0 w-[50vw] h-[100%] bg-[#fff] shadow-[-4px_0px_4px_rgba(0,0,0,0.25)] px-[20px] py-[20px]">
						<Link to="/home">
							<img src={BackArrow} alt="back" className="rotate-180" />
						</Link>
						<SideSortBy />
					</div> */}
					<ul className="flex flex-row justify-between items-center">
						<li className="mr-[34px] cursor-pointer no:hidden md:inline">
							<button type="button" onClick={(e) => signOut(e)} className="flex justify-center items-center">
								<img src={Logout} alt="Logout" className="no:w-[3em] no:h-[3em] md:w-[2.5em]" />
							</button>
						</li>
						<li className="mr-[34px] cursor-pointer">
							<Link to="/account">
								<img src={Account} alt="Account" className="no:w-[3em] no:h-[3em] md:w-[2.5em]" />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="no:hidden md:w-[20%] h-[100%] bg-[#FFFFFF] rounded-[20px] md:flex overflow-hidden justify-center items-center px-[20px]">
				<div className="min-w-[70px] min-h-[70px] rounded-[50%] bg-[#272343] flex justify-center items-center">
					<p className="text-[#FFF] text-[35px]">G</p>
				</div>
				<div className="no:hidden lg:flex flex-col justify-center items-start ml-[10px] w-[80%]">
					<p className="text-[1.4em] text-[#677094]">Hi,</p>
					<p className="text-[1.4em] font-[700] text-[#272343]">{userData?.firstName}</p>
				</div>
			</div>
		</div>
	);
}
