import React from "react";
import Divider from "../Assets/Divider.svg";
import Logo from "../Assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<div className="no:w-[80%] ss:w-[60%] h-[70%] bg-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[20px] flex justify-center items-center">
			<div className="w-[50%] h-[100%] rounded-tl-[20px] rounded-bl-[20px] bg-[#677094] overflow-hidden no:hidden lg:flex flex-col justify-center items-center">
				<img src={Logo} alt="logo" className="w-[150px] h-[150px]" />
				<p className="font-[Almendra] font-[700] text-[90px] text-[#EED132] w-[100%] flex justify-center items-center">Welcome</p>
			</div>
			<div className="no:w-[100%] lg:w-[50%] h-[100%] flex flex-col justify-center items-center max-w-[570px]">
				<div className="w-[100%] flex justify-center items-center font-[Arial] no:mb-[40px] ss:mb-[60px] font-[700] text-[40px] text-[#677094]">Login</div>
				<form action="/home" className="flex flex-col justify-center items-center w-[80%]">
					<input type="text" name="Email" placeholder="Email Address" className="w-[90%] font-[Arial] font-[700] text-[20px] text-[#677094] my-[10px] outline-none border-none" />
					<img src={Divider} alt="Divider" className="w-[90%] h-[5px] ss:mt-[10px]" />
					<input type="text" name="Password" placeholder="Enter Password" className="w-[90%] font-[Arial] font-[700] text-[20px] text-[#677094] my-[10px] outline-none border-none" />
					<img src={Divider} alt="Divider" className="w-[90%] h-[5px] ss:mt-[10px]" />
					<button className="bg-[#EED132] no:mt-[40px] ss:mt-[40px] w-[60%] no:h-[30px] ss:h-[35px] lg:h-[40px] no:rounded-[25px] lg:rounded-[20px] text-[#fff] font-[700] font-[Arial] no:text-[14px] ss:text-[18px] lg:text-[20px] hover:bg-[rgba(238,209,50,0.8)]">
						<NavLink to="/home">Login</NavLink>
					</button>
					<div className="font-[Arial] font-[700] text-[20px] text-[#677094] mt-[10px]">or connect with google</div>
					<button className="bg-[#EED132] no:mt-[5px] ss:mt-[10px] w-[60%] no:h-[30px] ss:h-[35px] lg:h-[40px] no:rounded-[25px] lg:rounded-[20px] text-[#fff] font-[700] font-[Arial] no:text-[14px] ss:text-[18px] lg:text-[20px] hover:bg-[rgba(238,209,50,0.8)]">
						<NavLink to="/home">Try as Demo user</NavLink>
					</button>
				</form>
				<NavLink to="/signup">
					<p className="font-[Arial] font-[400] text-[#677094] text-[15px] mt-[10px] cursor-default">
						new user? <span className="font-[Arial] font-[400] text-[#EED132] text-[15px] cursor-pointer">create new account</span>
					</p>
				</NavLink>
			</div>
		</div>
	);
};

export default Login;
