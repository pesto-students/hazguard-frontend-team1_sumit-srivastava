import { login } from "../Helpers/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken, setUserData, setCheckChange } from "../Store/storingData";
import { toast } from "react-toastify";
import { profile } from "../Helpers/user";

const DemoLogin = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginUser = (e, type) => {
		let email;
		if (type === 0) {
			email = "testuser1@pestoproject.com";
		}
		if (type === 1) {
			email = "testuser2@pestoproject.com";
		}
		if (type === 2) {
			email = "testuser3@pestoproject.com";
		}
		e.preventDefault();
		if (email !== "") {
			login({ email: email, password: "1234567890" })
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
	return (
		<>
			<div className="mt-20 text-center md:flex md:justify-between md:mx-32 sxl:flex-row sxl:mx-10">
				<div className="sxl:mb-16">
					<h2 className="text-2xl font-bold capitalize">Free Subscription</h2>
					<button
						onClick={(e) => {
							loginUser(e, 0);
						}}
						type="submit"
						className="md:mt-10 sxl:mt-6 w-44 py-3 text-lg font-semibold rounded-2xl bg-[#EED132]"
					>
						LOGIN
					</button>
				</div>
				<div className="sxl:mb-16">
					<h2 className="text-2xl font-bold capitalize">National Subscription</h2>
					<button
						onClick={(e) => {
							loginUser(e, 1);
						}}
						type="submit"
						className="md:mt-10 sxl:mt-6 w-44 py-3 text-lg font-semibold rounded-2xl bg-[#EED132]"
					>
						LOGIN
					</button>
				</div>
				<div>
					<h2 className="text-2xl font-bold capitalize">International Subscription</h2>
					<button
						onClick={(e) => {
							loginUser(e, 2);
						}}
						type="submit"
						className="md:mt-10 sxl:mt-6 w-44 py-3 text-lg font-semibold rounded-2xl bg-[#EED132]"
					>
						LOGIN
					</button>
				</div>
			</div>
		</>
	);
};

export default DemoLogin;
