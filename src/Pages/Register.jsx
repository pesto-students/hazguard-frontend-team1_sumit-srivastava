import { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../Helpers/auth";

const Register = () => {
	const [values, setValues] = useState({
		firstName: "",
		email: "",
		companyName: "",
		password1: "",
		password2: "",
	});
	const navigate = useNavigate();
	const { firstName, email, companyName, password1, password2 } = values;
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const signupUser = (e) => {
		e.preventDefault();
		if (firstName !== "" && email !== "" && companyName !== "" && password1 !== "" && password2 !== "") {
			if (password1 === password2) {
				signup({ firstName: firstName, email: email, companyName: companyName, password: password1 })
					.then((response) => {
						if (!response?.error) {
							setValues({
								firstName: "",
								email: "",
								companyName: "",
								password1: "",
								password2: "",
							});
							toast.success("Verification mail sent!");
							navigate("/");
						} else if (response?.error) {
							return toast.error(response?.message);
						}
					})
					.catch((e) => {
						toast.error("Not able to register! Please try again!");
						console.log(e);
					});
			} else {
				return toast.warning("Passwords don't match!");
			}
		} else {
			return toast.warning("Please enter all the fields!");
		}
	};
	return (
		<div className="bg-white w-4/5 h-4/5 absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] min-h-[600px] rounded-3xl flex justify-center items-center">
			<div className="sxl:hidden w-1/2 h-full bg-[#677094] rounded-tl-3xl rounded-bl-3xl md:flex flex-col justify-center items-center">
				<img src={Logo} alt="app logo" className="w-[200px]" />
				<h1 className=" text-[100px] font-[Almendra] font-bold text-[#EED132]">Welcome</h1>
			</div>
			<div className="sxl:w-full md:w-1/2 h-full flex flex-col justify-center items-center ">
				<h2 className="font-semibold text-[35px] text-[#272343]">Sign Up</h2>
				<form className="w-3/5 h-[75%] flex flex-col justify-center items-center">
					<div className="w-full border-b-4 border-solid border-b-[#EED132] my-3">
						<label htmlFor="firstName" className="font-semibold text-[#272343]">
							First Name
						</label>
						<input
							id="firstName"
							name="firstName"
							type="text"
							autoComplete="firstName"
							required
							className="my-1 w-full placeholder:text-[15px]"
							placeholder="Enter Your Firstname"
							value={firstName}
							onChange={handleChange("firstName")}
						/>
						{/* <svg width="100%" height="5" className="" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg> */}
					</div>
					<div className="w-full border-b-4 border-solid border-b-[#EED132] my-3">
						<label htmlFor="email" className="font-semibold text-[#272343]">
							Email Address
						</label>
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="my-1 w-full placeholder:text-[15px]"
							placeholder="Enter Your Email Address"
							value={email}
							onChange={handleChange("email")}
						/>
						{/* <svg width="100%" height="5px" className="" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg> */}
					</div>
					<div className="w-full border-b-4 border-solid border-b-[#EED132] my-3">
						<label htmlFor="companyName" className="font-semibold text-[#272343]">
							Company Name
						</label>
						<input
							id="companyName"
							name="companyName"
							type="companyName"
							autoComplete="companyName"
							required
							className="my-1 w-full placeholder:text-[15px]"
							placeholder="Enter Your Company Name"
							value={companyName}
							onChange={handleChange("companyName")}
						/>
						{/* <svg width="100%" height="5px" className="" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg> */}
					</div>
					<div className="w-full border-b-4 border-solid border-b-[#EED132] my-3">
						<label htmlFor="password1" className="font-semibold text-[#272343]">
							New Password
						</label>
						<input
							id="password1"
							name="password1"
							type="password"
							pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
							autoComplete="current-password1"
							required
							placeholder="Enter Your Password"
							className="my-1 w-full placeholder:text-[15px]"
							value={password1}
							onChange={handleChange("password1")}
						/>
						{/* <svg width="100%" height="5px" className="" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg> */}
					</div>
					<div className="w-full border-b-4 border-solid border-b-[#EED132] my-3">
						<label htmlFor="password2" className="font-semibold text-[#272343]">
							Confirm Password
						</label>
						<input
							id="password2"
							name="password2"
							type="password"
							pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
							autoComplete="current-password2"
							required
							placeholder="Enter Your Password Again"
							className="my-1 w-full placeholder:text-[15px]"
							value={password2}
							onChange={handleChange("password2")}
						/>
						{/* <svg width="100%" height="5px" className="" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg> */}
					</div>
					<button
						onClick={(e) => {
							signupUser(e);
						}}
						type="submit"
						className="bg-[#EED132] text-black sxl:text-[13px] md:text-[17px] rounded-3xl font-bold w-2/5 h-[7%] mt-3"
					>
						REGISTER
					</button>
				</form>
				<div className="mt-2">
					<p>
						Already registered?&nbsp;
						<Link className="text-[#EED132] font-semibold" to="/login">
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
