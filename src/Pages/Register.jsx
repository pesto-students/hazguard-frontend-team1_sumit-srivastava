import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		mobileNumber: "",
		companyName: "",
		password1: "",
		password2: "",
	});
	const navigate = useNavigate();
	const { firstName, lastName, email, mobileNumber, companyName, password1, password2 } = values;
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const signupUser = (e) => {
		e.preventDefault();
		if (firstName !== "" && lastName !== "" && email !== "" && mobileNumber !== "" && companyName !== "" && password1 !== "" && password2 !== "") {
			if (password1 === password2) {
				signup({ firstName: firstName, lastName: lastName, email: email, mobileNumber: mobileNumber, companyName: companyName, password: password1 })
					.then((data) => {
						if (!data?.error) {
							setValues({
								firstName: "",
								lastName: "",
								email: "",
								mobileNumber: "",
								companyName: "",
								password1: "",
								password2: "",
							});
							toast.success("Verification mail sent!");
							navigate("/");
						} else if (data?.error) {
							return toast.error(data?.message);
						}
					})
					.catch((e) => {
						toast.error("Not able to register! Please try again!");
						console.log(e);
					});
			} else {
				return toast.warning("passwords dont match!");
			}
		} else {
			return toast.warning("Please enter all the fields!");
		}
	};
	return (
		<div className="mt-16">
			<div className="w-full flex justify-center items-center">
				<div className="w-2/5 py-32 rounded-tl-2xl rounded-bl-2xl bg-[#677094] flex flex-col justify-center items-center">
					<img src={Logo} alt="app logo" className="w-40 h-40 mb-6" />
					<h1 className="font-[Almendra] font-semibold text-8xl text-[#EED132]">Welcome</h1>
				</div>
				<div className="w-2/5 py-12 rounded-tr-2xl rounded-br-2xl bg-[#fff] flex flex-col justify-center items-center">
					<h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900 capitalize">Sign Up</h2>
					<form className="mt-8 space-y-6" action="#" method="POST">
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<label htmlFor="firstName" className="sr-only">
									First Name
								</label>
								<input
									id="firstName"
									name="firstName"
									type="text"
									autoComplete="firstName"
									required
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Enter Your First Name"
									value={firstName}
									onChange={handleChange("firstName")}
								/>
							</div>
							<div>
								<label htmlFor="lastName" className="sr-only">
									Last Name
								</label>
								<input
									id="lastName"
									name="lastName"
									type="text"
									autoComplete="lastName"
									required
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Enter Your Last Name"
									value={lastName}
									onChange={handleChange("lastName")}
								/>
							</div>
							<div>
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Enter Your Email Address"
									value={email}
									onChange={handleChange("email")}
								/>
							</div>
							<div>
								<label htmlFor="password1" className="sr-only">
									New Password
								</label>
								<input
									id="password1"
									name="password1"
									type="password"
									pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
									autoComplete="current-password1"
									required
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Enter Your Password"
									value={password1}
									onChange={handleChange("password1")}
								/>
							</div>
							<div>
								<label htmlFor="password2" className="sr-only">
									Confirm Password
								</label>
								<input
									id="password2"
									name="password2"
									type="password"
									pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
									autoComplete="current-password2"
									required
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Enter Your Password Again"
									value={password2}
									onChange={handleChange("password2")}
								/>
							</div>
						</div>
						<div>
							<button
								onClick={(e) => {
									signupUser(e);
								}}
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								REGISTER
							</button>
						</div>
					</form>
					<div className="mb-10">
						<hr className="lineColor w-100 mb-6" />
						<p className="text-sm text-center font-light">
							Already registered?&nbsp;
							<Link className="font-medium" to="/login">
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
