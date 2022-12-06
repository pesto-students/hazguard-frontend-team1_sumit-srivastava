import NationalCard from "../Components/NationalCard";
import InternationalCard from "../Components/InternationalCard";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { createSubscription, verifyPayment } from "../Helpers/misc";
import { toast } from "react-toastify";
import { SquareLogo } from "../Assets/library";
import { useNavigate } from "react-router-dom";
import { changeSubscriptionType } from "../Store/storingData";
import { loadRazorpay } from "../Utilities/scriptLoader";

const BuyPlan = () => {
	const dispatch = useDispatch();
	const [loaded, setLoaded] = useState(false);
	const navigate = useNavigate();
	const [plan, setPlan] = useState();
	const userData = useSelector((state) => state.userData);
	const accessToken = useSelector((state) => state.accessToken);
	const purchasePlan = (e) => {
		e.preventDefault();
		if (plan === "internationalplan" || plan === "nationalplan") {
			createSubscription({ planType: plan }, accessToken)
				.then((response) => {
					if (!response?.error) {
						switch (plan) {
							case "internationalplan": {
								const paymentObject = new Razorpay({
									key: "rzp_test_lYM1tsSUjMnWSG",
									subscription_id: response.data.id,
									name: "HazGuard International Plan",
									description: "This will give you access to all countries.",
									image: SquareLogo,
									handler: (response) => {
										verifyPayment(
											{
												planType: plan,
												razorpay_payment_id: response.razorpay_payment_id,
												razorpay_subscription_id: response.razorpay_subscription_id,
												razorpay_signature: response.razorpay_signature,
											},
											accessToken
										)
											.then((response) => {
												if (!response?.error) {
													toast.success("Payment Done!");
													dispatch(changeSubscriptionType("International"));
													navigate("/home");
												} else if (response?.error) {
													return toast.error(response?.message);
												}
											})
											.catch((e) => {
												toast.error("Not able to verify payment! Please try again!");
												console.log(e);
											});
									},
									prefill: {
										name: userData.companyName,
										email: userData.email,
										contact: userData.mobileNumber,
									},
									theme: {
										color: "#eed132",
									},
								});
								paymentObject.open();
								break;
							}
							case "nationalplan": {
								const paymentObject = new Razorpay({
									key: "rzp_test_lYM1tsSUjMnWSG",
									subscription_id: response.data.id,
									name: "HazGuard National Plan",
									description: "This will give you access to one country.",
									image: SquareLogo,
									handler: (response) => {
										verifyPayment(
											{
												planType: plan,
												razorpay_payment_id: response.razorpay_payment_id,
												razorpay_subscription_id: response.razorpay_subscription_id,
												razorpay_signature: response.razorpay_signature,
											},
											accessToken
										)
											.then((response) => {
												if (!response?.error) {
													toast.success("Payment Done!");
													dispatch(changeSubscriptionType("National"));
													navigate("/home");
												} else if (response?.error) {
													return toast.error(response?.message);
												}
											})
											.catch((e) => {
												toast.error("Not able to verify payment! Please try again!");
												console.log(e);
											});
									},
									prefill: {
										name: userData.companyName,
										email: userData.email,
										contact: userData.mobileNumber,
									},
									theme: {
										color: "#eed132",
									},
								});
								paymentObject.open();
								break;
							}
						}
						setPlan("");
					} else if (response?.error) {
						return toast.error(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to create subscription! Please try again!");
					console.log(e);
				});
		} else {
			return toast.warning("Please select a plan!");
		}
	};
	useEffect(() => {
		loadRazorpay(() => {
			setLoaded(true);
		});
	});
	return (
		<>
			{loaded ? (
				<section className="bg-white text-center p-20 pt-9">
					<h1 className="text-5xl text-center mb-10 font-bold">Plans</h1>
					<div className="flex justify-between items-center mb-14">
						<NationalCard fromBuyPlan={true} userData={userData} plan={plan} setPlan={setPlan} />
						<div className="w-28"></div>
						<InternationalCard fromBuyPlan={true} userData={userData} plan={plan} setPlan={setPlan} />
					</div>
					<button onClick={(e) => purchasePlan(e)} className="sxl:w-[70%] md:w-[10%] h-[40px] bg-[#EED132] rounded-[30px] font-[700] text-[#08] sxl:text-[15px] lg:text-[18px]">
						PAY
					</button>
				</section>
			) : (
				<div className="h-[60vh] flex justify-center items-center">
					<svg
						height="200px"
						width="200px"
						version="1.1"
						id="L5"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 100 100"
						enableBackground="new 0 0 0 0"
						xmlSpace="preserve"
					>
						<circle fill="#EED132" stroke="none" cx={6} cy={50} r={6}>
							<animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
						</circle>
						<circle fill="#EED132" stroke="none" cx={30} cy={50} r={6}>
							<animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
						</circle>
						<circle fill="#EED132" stroke="none" cx={54} cy={50} r={6}>
							<animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3" />
						</circle>
					</svg>
				</div>
			)}
		</>
	);
};

export default BuyPlan;
