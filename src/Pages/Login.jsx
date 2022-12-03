import { useEffect, useState } from "react";
import { Logo } from "../Assets/library";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../Helpers/auth";
import { profile, updateProfile } from "../Helpers/user";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setRefreshToken, setUserData, setCheckChange } from "../Store/storingData";
import { uploadToS3 } from "../Utilities/uploadToS3";

const Login = () => {
	const [file, setFile] = useState();
	const [getMoreDetails, setGetMoreDetails] = useState(false);
	const userData = useSelector((state) => state.userData);
	const accessToken = useSelector((state) => state.accessToken);
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		email: "",
		password: "",
		lastName: "",
		profilePicture: "",
		mobileNumber: "",
		state: "",
		country: "",
		industry: "",
		department: "",
	});
	const navigate = useNavigate();
	const { email, password, lastName, profilePicture, mobileNumber, state, country, industry, department } = values;
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const loginUser = (e) => {
		e.preventDefault();
		if (email !== "" && password !== "") {
			login(values)
				.then(async (response) => {
					if (!response?.error) {
						let data;
						dispatch(
							setUserData(
								await profile(response?.accessToken)
									.then((response) => {
										if (!response?.error) {
											data = response;
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
						setValues({
							email: "",
							password: "",
							lastName: data.lastName,
							profilePicture: data.profilePicture,
							mobileNumber: data.mobileNumber || "",
							state: data.state,
							country: data.country,
							industry: data.industry,
							department: data.department,
						});
						dispatch(setAccessToken(response?.accessToken));
						dispatch(setRefreshToken(response?.refreshToken));
						dispatch(setCheckChange());
						if (data.lastName === "" || data.mobileNumber === null || data.state === "" || data.country === "" || data.industry === "" || data.department === "") {
							setGetMoreDetails(true);
						} else {
							navigate("/home");
						}
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
	const updateDetails = async (e) => {
		e.preventDefault();
		let imageLink = profilePicture;
		if (file) {
			if (!(await uploadToS3("profilePictures", file, userData.userId)).error) {
				imageLink = `https://hazguard-files.s3.ap-south-1.amazonaws.com/profilePictures/${userData.userId}/${file.name}`;
			} else {
				return toast.error("Not able to update! Please try again!");
			}
		}
		if (lastName !== "" && mobileNumber !== "" && state !== "" && country !== "" && industry !== "" && department !== "") {
			updateProfile(
				{
					companyName: userData.companyName,
					firstName: userData.firstName,
					lastName: lastName,
					profilePicture: imageLink,
					mobileNumber: mobileNumber,
					state: state,
					country: country,
					industry: industry,
					department: department,
				},
				accessToken
			)
				.then(async (response) => {
					if (!response?.error) {
						setValues({
							email: "",
							password: "",
							lastName: "",
							profilePicture: "",
							mobileNumber: "",
							state: "",
							country: "",
							industry: "",
							department: "",
						});
						dispatch(
							setUserData(
								await profile(accessToken)
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
						toast.success("Details updated!");
						navigate("/home");
					} else if (response?.error) {
						return toast.error(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to update! Please try again!");
					console.log(e);
				});
		} else {
			return toast.warning("Please enter all the fields!");
		}
	};
	useEffect(() => {
		if (file) {
			setValues({ ...values, profilePicture: URL.createObjectURL(file) });
		}
	}, [file]);
	return (
		<>
			{!getMoreDetails ? (
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
			) : (
				<div className="flex justify-center items-center p-8">
					<div className="sxl:w-full md:w-2/5  h-[100%] bg-[#fff] p-10 rounded-[20px] text-center">
						<h1 className="text-[#677094] text-[25px] mb-5 font-[700]">My Profile</h1>
						<div className="w-[100%] h-[90%] sxl:border-none md:border-solid md:border-[#677094] flex flex-col justify-center items-center sxl:py-[20px] md:py-[0px]">
							<div className="flex justify-center">
								<label htmlFor="photo-upload" className="custom-file-upload">
									<div className="img-wrap img-upload">
										<img htmlFor="photo-upload" src={profilePicture} alt="Profile_Pic" />
									</div>
									<input className="hidden" id="photo-upload" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
								</label>
							</div>
							<form className="mt-5 w-3/5 h-[75%] flex flex-col justify-center items-center">
								<div className="border-b-4 border-solid border-b-[#EED132] my-3 flex flex-col justify-center items-start">
									<label htmlFor="lastName" className="font-semibold text-[#272343]">
										Last Name
									</label>
									<input
										id="lastName"
										name="lastName"
										type="text"
										required
										className="mb-2 w-full placeholder:text-[15px]"
										placeholder="Enter Your Lastname"
										value={lastName}
										onChange={handleChange("lastName")}
									/>
								</div>
								<div className="border-b-4 border-solid border-b-[#EED132] my-3 flex flex-col justify-center items-start">
									<label htmlFor="mobileNumber" className="font-semibold text-[#272343]">
										Mobile Number
									</label>
									<input
										id="mobileNumber"
										name="mobileNumber"
										type="text"
										autoComplete="mobileNumber"
										required
										className="mb-2 w-full placeholder:text-[15px]"
										placeholder="Enter Your Mobile Number"
										value={mobileNumber}
										onChange={handleChange("mobileNumber")}
									/>
								</div>
								<div className="border-b-4 border-solid border-b-[#EED132] my-3 flex flex-col justify-center items-start">
									<label htmlFor="state" className="font-semibold text-[#272343]">
										State
									</label>
									<input
										id="state"
										name="state"
										type="text"
										required
										className="mb-2 w-full placeholder:text-[15px]"
										placeholder="Enter Your State"
										value={state}
										onChange={handleChange("state")}
									/>
								</div>
								<div className="border-b-4 border-solid border-b-[#EED132] my-3 flex flex-col justify-center items-start">
									<label htmlFor="country" className="font-semibold text-[#272343]">
										Country
									</label>
									<input
										id="country"
										name="country"
										type="text"
										required
										className="mb-2 w-full placeholder:text-[15px]"
										placeholder="Enter Your Country"
										value={country}
										onChange={handleChange("country")}
									/>
								</div>
								<div className="border-b-4 border-solid border-b-[#EED132] my-3 flex flex-col justify-center items-start">
									<label htmlFor="department" className="font-semibold text-[#272343]">
										Department
									</label>
									<input
										id="department"
										name="department"
										type="text"
										required
										placeholder="Enter Your Department"
										className="mb-2 w-full placeholder:text-[15px]"
										value={department}
										onChange={handleChange("department")}
									/>
								</div>
								<div className="sxl:w-fit md:w-[20%] sxl:h-fit md:h-full bg-[#ffffff] md:rounded-[20px] flex flex-col justify-center items-center">
									<label htmlFor="industry" className="font-semibold text-[#272343]">
										Industry
									</label>
									<select
										id="industry"
										name="industry"
										value={industry}
										onChange={handleChange("industry")}
										className="text-center sxl:py-1 md:py-2 px-0 w-auto text-sm font-medium bg-transparent border-0 border-b-4 border-[#EED132] mb-2 text-[15px]"
									>
										<option value="">Industry Type</option>
										<option value="Agriculture">Agriculture</option>
										<option value="Apparel">Apparel</option>
										<option value="Oil & Gas Production">Oil & Gas Production</option>
										<option value="Construction">Construction</option>
										<option value="Manufacturing">Manufacturing</option>
										<option value="Mining">Mining</option>
										<option value="Forestry">Forestry</option>
										<option value="Shipping">Shipping</option>
										<option value="Transport">Transport</option>
										<option value="Utilities">Utilities</option>
									</select>
								</div>
								<button
									onClick={(e) => {
										updateDetails(e);
									}}
									type="submit"
									className="bg-[#EED132] text-black sxl:text-[13px] md:text-[17px] rounded-3xl font-semibold w-3/5 h-[9%] mt-5 py-2"
								>
									SAVE
								</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Login;
