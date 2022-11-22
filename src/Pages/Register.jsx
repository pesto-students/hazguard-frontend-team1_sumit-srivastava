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
		<div className="mt-8 flex justify-center items-center">
			<div className="w-2/5 py-[214.5px] rounded-tl-2xl rounded-bl-2xl bg-[#677094] flex flex-col justify-center items-center">
				<img src={Logo} alt="app logo" className="w-40 h-40 mb-6" />
				<h1 className="font-[Almendra] font-semibold text-8xl text-[#EED132]">Welcome</h1>
			</div>
			<div className="w-2/5 py-10 rounded-tr-2xl rounded-br-2xl bg-[#fff] flex flex-col justify-center items-center">
				<h2 className="text-center text-3xl font-bold capitalize">Sign Up</h2>
				<form className="mt-8 w-80">
					<div className="mb-4">
						<label htmlFor="firstName" className="font-medium text-lg">
							First Name
						</label>
						<input id="firstName" name="firstName" type="text" autoComplete="firstName" required className="w-full pt-2 pb-1" value={firstName} onChange={handleChange("firstName")} />
						<svg width="100%" height="5px" className="rounded-md" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="font-medium text-lg">
							Email Address
						</label>
						<input id="email" name="email" type="email" autoComplete="email" required className="w-full pt-2 pb-1" value={email} onChange={handleChange("email")} />
						<svg width="100%" height="5px" className="rounded-md" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="mb-4">
						<label htmlFor="companyName" className="font-medium text-lg">
							Company Name
						</label>
						<input
							id="companyName"
							name="companyName"
							type="companyName"
							autoComplete="companyName"
							required
							className="w-full pt-2 pb-1"
							value={companyName}
							onChange={handleChange("companyName")}
						/>
						<svg width="100%" height="5px" className="rounded-md" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="mb-4">
						<label htmlFor="password1" className="font-medium text-lg">
							New Password
						</label>
						<input
							id="password1"
							name="password1"
							type="password"
							pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
							autoComplete="current-password1"
							required
							className="w-full pt-2 pb-1"
							value={password1}
							onChange={handleChange("password1")}
						/>
						<svg width="100%" height="5px" className="rounded-md" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="">
						<label htmlFor="password2" className="font-medium text-lg">
							Confirm Password
						</label>
						<input
							id="password2"
							name="password2"
							type="password"
							pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
							autoComplete="current-password2"
							required
							className="w-full pt-2 pb-1"
							value={password2}
							onChange={handleChange("password2")}
						/>
						<svg width="100%" height="5px" className="rounded-md" viewBox="0 0 500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line y1="3" x2="500" y2="3" stroke="url(#paint0_linear_43_448)" strokeWidth="6" />
							<defs>
								<linearGradient id="paint0_linear_43_448" x1="0" y1="6" x2="500" y2="6" gradientUnits="userSpaceOnUse">
									<stop stopColor="#272343" />
									<stop offset="1" stopColor="#EED132" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<button
						onClick={(e) => {
							signupUser(e);
						}}
						type="submit"
						className="mt-10 py-3 text-lg font-semibold w-full rounded-2xl bg-[#EED132]"
					>
						REGISTER
					</button>
				</form>
				<div className="mt-9">
					<p className="text-md text-center font-light">
						Already registered?&nbsp;
						<Link className="font-semibold" to="/login">
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
