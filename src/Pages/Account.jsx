import { BackArrow } from "../Assets/library";
import FreeUser from "../Components/FreeUser";
import NationalCard from "../Components/NationalCard";
import InternationalCard from "../Components/InternationalCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Account = () => {
	const navigate = useNavigate();
	const userData = useSelector((state) => state.userData);
	return (
		<div className="sxl:h-[100%] md:h-[1080px] w-[100vw] px-[30px] py-[30px]">
			<div className="w-[100%] h-[100%] bg-[#fff] rounded-[20px] px-[30px] py-[20px] flex flex-col justify-center">
				<button className="absolute top-12 left-12 " onClick={() => navigate(-1)}>
					<img src={BackArrow} alt="back" />
				</button>
				<h1 className="text-[#677094] text-[35px] text-center font-[800] mb-10">My Profile</h1>
				<div className="flex sxl:flex-wrap md:flex-nowrap">
					<div className="sxl:w-[100%] md:w-[50%] h-[100%] flex flex-col justify-center items-center">
						<div className="w-[100%] h-[90%] sxl:border-none md:border-r-2 md:border-solid md:border-[#677094] flex flex-col justify-center items-center sxl:py-[20px] md:py-[0px]">
							<div className="sxl:w-[100px] sxl:min-h-[100px] md:min-h-[150px] md:mt-[0px] sxl:h-[100px] md:w-[150px] md:h-[150px] rounded-[50%] bg-[#5775E8] flex justify-center items-center font-[700] text-[#fff] sxl:text-[40px] md:text-[70px]">
								<img className="rounded-full" src={userData?.profilePicture} alt="profile-pic" />
							</div>
							<div className="sxl:w-[90%] md:w-[80%] h-[80%] flex justify-between items-center mt-[50px] sxl:flex-wrap md:flex-nowrap">
								<div className="mr-10">
									<div className="border-b-4 border-solid border-b-[#EED132] my-3">
										<label htmlFor="email" className="font-semibold text-[#272343]">
											Email Address
										</label>
										<input id="email" name="email" readOnly type="email" className="mb-2 w-full" value={userData?.email} />
									</div>
									<div className="border-b-4 border-solid border-b-[#EED132] my-3">
										<label htmlFor="mobileNumber" className="font-semibold text-[#272343]">
											Mobile Number
										</label>
										<input id="mobileNumber" name="mobileNumber" readOnly type="text" className="mb-2 w-full" value={userData?.mobileNumber} />
									</div>
									<div className="border-b-4 border-solid border-b-[#EED132] my-3">
										<label htmlFor="fullName" className="font-semibold text-[#272343]">
											Full Name
										</label>
										<input id="fullName" name="fullName" readOnly type="text" className="mb-2 w-full" value={userData?.firstName + " " + userData?.lastName} />
									</div>
									<div className="border-b-4 border-solid border-b-[#EED132] my-3">
										<label htmlFor="department" className="font-semibold text-[#272343]">
											Department
										</label>
										<input id="department" name="department" readOnly type="text" className="mb-2 w-full" value={userData?.department} />
									</div>
								</div>
								<div>
									<div className="border-b-4 border-solid border-b-[#EED132] my-3">
										<label htmlFor="companyName" className="font-semibold text-[#272343]">
											Company Name
										</label>
										<input id="companyName" name="companyName" readOnly type="text" className="mb-2 w-full" value={userData?.companyName} />
									</div>
									<div className="border-b-4 border-solid border-b-[#EED132] my-3">
										<label htmlFor="state" className="font-semibold text-[#272343]">
											State
										</label>
										<input id="state" name="state" readOnly type="text" className="mb-2 w-full" value={userData?.state} />
									</div>
									<div className="border-b-4 border-solid border-b-[#EED132] my-3">
										<label htmlFor="country" className="font-semibold text-[#272343]">
											Country
										</label>
										<input id="country" name="country" readOnly type="text" className="mb-2 w-full" value={userData?.country} />
									</div>
									<div className="border-b-4 border-solid border-b-[#EED132] my-3">
										<label htmlFor="industry" className="font-semibold text-[#272343]">
											Industry
										</label>
										<input id="industry" name="industry" readOnly type="text" className="mb-2 w-full" value={userData?.industry} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="md:w-[50%] h-[100%] sxl:w-full md:flex px-[10px] py-[10px] flex flex-col justify-center items-center overflow-y-scroll">
						<div className="text-[#677094] text-[25px] font-[700] mb-[10px]">Subsciption Details</div>
						{userData?.subscriptionType === "Free" ? <FreeUser /> : userData?.subscriptionType === "National" ? <NationalCard /> : <InternationalCard />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
