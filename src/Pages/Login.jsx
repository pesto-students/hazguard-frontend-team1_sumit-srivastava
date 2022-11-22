import { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, profile } from "../Helpers/auth";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken, setUserData } from "../Store/storingData";

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
						navigate("/");
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
		<div className="mt-24 flex justify-center items-center">
			<div className="w-2/5 py-[151px] rounded-tl-2xl rounded-bl-2xl bg-[#677094] flex flex-col justify-center items-center">
				<img src={Logo} alt="app logo" className="w-40 h-40 mb-6" />
				<h1 className="font-[Almendra] font-semibold text-8xl text-[#EED132]">Welcome</h1>
			</div>
			<div className="w-2/5 py-24 rounded-tr-2xl rounded-br-2xl bg-[#fff] flex flex-col justify-center items-center">
				<h2 className="text-center text-3xl font-bold capitalize">Sign In</h2>
				<form className="mt-8 w-80">
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
						<label htmlFor="password" className="font-medium text-lg">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
							autoComplete="current-password"
							required
							className="w-full pt-2 pb-1"
							value={password}
							onChange={handleChange("password")}
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
							loginUser(e);
						}}
						type="submit"
						className="mt-10 py-3 text-lg font-semibold w-full rounded-2xl bg-[#EED132]"
					>
						LOGIN
					</button>
				</form>
				<div className="mt-9">
					<p className="text-md text-center font-light">
						Not registered?&nbsp;
						<Link className="font-semibold" to="/register">
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
