import { BackArrow } from "../Assets/library";
import { NavLink } from "react-router-dom";
import SinglePost from "../Components/SinglePost";
import NationalCard from "../Components/NationalCard";
import FreeUser from "../Components/FreeUser";
import { useState } from "react";

const Account = () => {
	//State for profile picture updation
	const [profilePicture, setProfilePicture] = useState("");

	//function to handle profile picture change
	//TODO: Devansh add Amazon S3 functionality and set response link of image in setProfilePicture
	const handleProfilePicture = (event) => {
		setProfilePicture(event.target.value);
	};
	return (
		<div className="h-[1080px] w-[100vw] px-[15px] py-[15px]">
			<div className="w-[100%] h-[100%] bg-[#fff] rounded-[20px] px-[20px] py-[20px] flex">
				<NavLink to="/home">
					<img src={BackArrow} alt="back" className="absolute top-[30px] left-[30px]" />
				</NavLink>
				<div className="sxl:w-[100%] md:w-[50%] h-[100%] flex flex-col justify-center items-center">
					<div className="w-[100%] h-[10%] flex justify-center items-center">
						<p className=" text-[#677094] text-[25px] font-[700]">My Profile</p>
					</div>
					<div className="w-[100%] h-[90%] sxl:border-none md:border-r-2 md:border-solid md:border-[#677094] flex flex-col justify-center items-center sxl:py-[20px] md:py-[0px]">
						<div className="sxl:w-[100px] sxl:min-h-[100px] md:min-h-[200px] md:mt-[0px] sxl:h-[100px] md:w-[200px] md:h-[200px] rounded-[50%] bg-[#5775E8] flex justify-center items-center  font-[700] text-[#fff] sxl:text-[40px] md:text-[70px]">
							{profilePicture !== "" ? <img src={profilePicture} alt="profile" className="rounded-1/2" /> : "G"}
						</div>
						<button
							className="text-blue-500 underline cursor-pointer"
							onClick={() => {
								document.getElementById("profile").click();
							}}
						>
							change image
						</button>
						<input type="file" name="profile" id="profile" className="hidden" onChange={handleProfilePicture} />
						<form action="/" className="sxl:w-[90%] md:w-[80%] h-[80%] flex flex-col justify-center items-center mt-[50px]">
							<div className="flex w-[100%] mb-[10px] sxl:flex-wrap md:flex-nowrap">
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="companyName" className="text-[#272343]  text-[15px] font-[700]">
										Company Name
									</label>
									<input
										type="text"
										name="companyName"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="Godrej Industries"
									/>
								</div>
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="email" className="text-[#272343]  text-[15px] font-[700]">
										Email Adress
									</label>
									<input
										type="text"
										name="email"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="safety@godrej.com"
									/>
								</div>
							</div>
							<div className="flex w-[100%] mb-[10px] sxl:flex-wrap md:flex-nowrap">
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="companyType" className="text-[#272343]  text-[15px] font-[700]">
										Company Type
									</label>
									<select name="companyType" className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px] outline-none">
										<option value="">Default</option>
										<option value="Manufacturing">Manufacturing</option>
										<option value="Chemical">Chemical</option>
										<option value="Oil-Fertilizer">Oil-Fertilizer</option>
										<option value="Petroleum">Petroleum</option>
									</select>
								</div>
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="Number" className="text-[#272343]  text-[15px] font-[700]">
										Mobile Number
									</label>
									<input
										type="text"
										name="Number"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="+91 1234567890"
									/>
								</div>
							</div>
							<div className="flex w-[100%] mb-[10px] sxl:flex-wrap md:flex-nowrap">
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="companyLocation" className="text-[#272343]  text-[15px] font-[700]">
										Company Location
									</label>
									<input
										type="text"
										name="companyLocation"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="Dahej, Gujarat"
									/>
								</div>
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="Department" className="text-[#272343]  text-[15px] font-[700]">
										Department Name
									</label>
									<input
										type="text"
										name="Department"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="Safety Department"
									/>
								</div>
							</div>
							<div className="w-[100%]  font-[700] text-[#677094] text-[17px] mt-[10px]">Change Password</div>
							<div className="flex w-[100%] mb-[10px] sxl:flex-wrap md:flex-nowrap">
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="currentPassword" className="text-[#272343]  text-[15px] font-[700]">
										Current Password
									</label>
									<input
										type="text"
										name="currentPassword"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="Dahej, Gujarat"
									/>
								</div>
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="newPassword" className="text-[#272343]  text-[15px] font-[700]">
										New Password
									</label>
									<input
										type="text"
										name="newPassword"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="Safety Department"
									/>
								</div>
							</div>
							<div className="flex w-[100%] mb-[10px] sxl:flex-wrap md:flex-nowrap">
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="confirmPassword" className="text-[#272343]  text-[15px] font-[700]">
										Confirm Password
									</label>
									<input
										type="text"
										name="confirmPassword"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="Dahej, Gujarat"
									/>
								</div>
								<div className="flex flex-col sxl:w-[100%] md:w-[50%] md:mr-[20px] sxl:mt-[5px] md:mt-[0px]">
									<label htmlFor="OneTimePassword" className="text-[#272343]  text-[15px] font-[700]">
										One Time Password
									</label>
									<input
										type="text"
										name="OneTimePassword"
										className="border-[1px] border-solid border-[#000]  w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]"
										placeholder="Safety Department"
									/>
								</div>
							</div>
							<button className="bg-[#EED132] text-[#000] md:mt-[30px] sxl:w-[150px] md:w-[200px] min-h-[28px] sxl:h-[35px] md:h-[35px] rounded-[40px]  sxl:text-[18px] md:text-[18px] font-[700] hover:bg-[rgba(238,209,50,0.8)]">
								Save & Exit
							</button>
						</form>
					</div>
				</div>
				<div className="w-[50%] h-[100%] sxl:hidden md:flex px-[10px] py-[10px] flex flex-col justify-center items-center overflow-y-scroll">
					<div className=" text-[#677094] text-[25px] font-[700] mb-[10px]">Subsciption Details</div>
					<FreeUser />
				</div>
			</div>
		</div>
	);
};

export default Account;
