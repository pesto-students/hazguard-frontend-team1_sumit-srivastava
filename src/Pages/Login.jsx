import { useState } from "react";
import { Logo } from "../Assets/library";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../Helpers/auth";
import { profile } from "../Helpers/user";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken, setUserData, setCheckChange } from "../Store/storingData";

const Login = () => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const { email, password } = values;
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const loginUser = (e) => {
		e.preventDefault();
		if (email !== "" && password !== "") {
			login(values)
				.then(async (response) => {
					if (!response?.error) {
						setValues({
							email: "",
							password: "",
						});
						dispatch(
							setUserData(
								await profile(response?.accessToken)
									.then((response) => {
										if (!response?.error) {
											return response;
										} else if (response?.error) {
											return toast.error(response?.message);
										}
									})
									.catch((e) => {
										toast.error("Not able to verify! Please try again!");
										console.log(e);
									})
							)
						);
						dispatch(setAccessToken(response?.accessToken));
						dispatch(setRefreshToken(response?.refreshToken));
						dispatch(setCheckChange());
						navigate("/home");
					} else if (response?.error) {
						return toast.error(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to login! Please try again!");
					console.log(e);
				});
		} else {
			return toast.warning("Please enter all the fields!");
		}
	};
	return (
		<div className="bg-white w-4/5 h-4/5 absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] min-h-[600px] rounded-3xl flex justify-center items-center">
			<div className="sxl:hidden w-1/2 h-full bg-[#677094] rounded-tl-3xl rounded-bl-3xl md:flex flex-col justify-center items-center">
				<img src={Logo} alt="app logo" className="w-[200px]" />
				<h1 className="text-[100px] font-[Almendra] font-bold text-[#EED132]">Welcome</h1>
			</div>
			<div className="sxl:w-full py-20 md:w-1/2 h-full flex flex-col justify-center items-center">
				<h2 className="font-semibold text-4xl text-[#272343]">Sign In</h2>
				<form className="w-3/5 h-[75%] flex flex-col justify-center items-center">
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
					</div>
					<div className="w-full border-b-4 border-solid border-b-[#EED132] my-3">
						<label htmlFor="password" className="font-semibold text-[#272343]">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
							autoComplete="current-password"
							required
							placeholder="Enter Your Password"
							className="my-1 w-full placeholder:text-[15px]"
							value={password}
							onChange={handleChange("password")}
						/>
					</div>
					<button
						onClick={(e) => {
							loginUser(e);
						}}
						type="submit"
						className="bg-[#EED132] text-black sxl:text-[15px] md:text-[17px] rounded-3xl font-semibold w-3/5 h-[12%] py-2 mt-10"
					>
						LOGIN
					</button>
				</form>
				<div className="mt-9 text-sm">
					<p>
						Not registered yet?&nbsp;
						<Link className="text-black font-bold" to="/register">
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
