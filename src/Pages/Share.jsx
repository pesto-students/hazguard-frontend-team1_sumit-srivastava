import Base from "./Base";

const Share = () => {
	return (
		<>
			<Base>
				<div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center mt-[30px] pb-[30px]">
					<div className="w-[100%] h-[calc(100%)] flex justify-center items-center no:px-[15px] md:px-[30px] no:flex-wrap md:flex-nowrap">
						<div className="no:w-[100%] md:w-[50%] h-[100%] bg-[#fff] rounded-[20px] no:mb-[15px] md:mb-[0px] md:mr-[15px] px-[20px] py-[20px] flex justify-center items-center flex-col">
							<div className=" font-[700] text-[#272343] text-[20px] mb-[30px] self-start">Hazard Information</div>
							<form action="" className="w-[100%] h-[100%] flex flex-col justify-start items-center">
								<div className="w-[90%] flex flex-col justify-center items-start mb-[30px]">
									<label htmlFor="type" className=" font-[400] text-[#272343] text-[18px]">
										Hazard Type<span className=" text-red-600">*</span>
									</label>
									<select
										name="type"
										id="type"
										className="border-[1px] border-solid border-[#272343] w-[100%] h-[40px] text-center  font-[700] text-[#677094] text-[15px] cursor-pointer"
									>
										<option
											value=""
											defaultChecked
											className=" font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
										>
											----------------Default----------------
										</option>
										<option
											value="Biological"
											className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
										>
											Biological
										</option>
										<option value="Chemical" className=" font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Chemical
										</option>
										<option value="Physical" className=" font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Physical
										</option>
										<option value="Safety" className=" font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Safety
										</option>
									</select>
								</div>
								<div className="w-[90%] flex flex-col justify-center items-start mb-[30px]">
									<label htmlFor="level" className=" font-[400] text-[#272343] text-[18px]">
										Hazard Level<span className=" text-red-600">*</span>
									</label>
									<select
										name="level"
										id="level"
										className="border-[1px] border-solid border-[#272343] w-[100%] h-[40px] text-center  font-[700] text-[#677094] text-[15px] cursor-pointer"
									>
										<option
											value=""
											defaultChecked
											className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
										>
											----------------Default----------------
										</option>
										<option value="Low" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Low
										</option>
										<option value="Moderate" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Moderate
										</option>
										<option value="High" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											High
										</option>
									</select>
								</div>
								<div className="w-[90%] flex flex-col justify-center items-start mb-[30px]">
									<label htmlFor="type" className=" font-[400] text-[#272343] text-[18px]">
										Preferrable Industry types<span className=" text-red-600">*</span>
									</label>
									<select
										name="type"
										id="type"
										className="border-[1px] border-solid border-[#272343] w-[100%] h-[40px] text-center  font-[700] text-[#677094] text-[15px] cursor-pointer"
									>
										<option value="" defaultChecked>
											----------------Default----------------
										</option>
										<option value="Chemical" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Chemical
										</option>
										<option
											value="Oil&Gas-Production"
											className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
										>
											Oil & Gas Production
										</option>
										<option value="Mining" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Mining
										</option>
										<option
											value="Agriculture"
											className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
										>
											Agriculture
										</option>
										<option value="Apparel" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Apparel
										</option>
										<option
											value="Construction"
											className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
										>
											Construction
										</option>
										<option value="Forestry" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Forestry
										</option>
										<option value="Shipping" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Shipping
										</option>
										<option value="Transport" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Transport
										</option>
										<option value="Utilities" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Utilities
										</option>
									</select>
								</div>
								<div className="w-[90%] flex flex-col justify-center items-start mb-[30px]">
									<label htmlFor="type" className=" font-[400] text-[#272343] text-[18px]">
										Type of damage caused by Hazard<span className=" text-red-600">*</span>
									</label>
									<select
										name="type"
										id="type"
										className="border-[1px] border-solid border-[#272343] w-[100%] h-[40px] text-center  font-[700] text-[#677094] text-[15px] cursor-pointer"
									>
										<option value="" defaultChecked>
											----------------Default----------------
										</option>
										<option
											value="Economical"
											className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
										>
											Economical
										</option>
										<option value="Physical" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Physical
										</option>
										<option value="Manpower" className="  font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer">
											Manpower
										</option>
									</select>
								</div>
								<div className="w-[90%] flex flex-col justify-center items-start mb-[30px]">
									<label htmlFor="type" className=" font-[400] text-[#272343] text-[18px]">
										Damage affection time<span className=" text-red-600">*</span>
									</label>
									<input
										type="text"
										id="type"
										className={`$"border-[1px] border-solid border-[#272343] w-[100%] h-[40px] text-center  font-[700] text-[#677094] text-[15px] cursor-pointer" cursor-text`}
									/>
								</div>
								<button type="save" className="self-center bg-[#EED132] w-[150px] h-[40px] rounded-[20px]  font-[700] text-[#fff] text-[20px] hover:bg-[rgba(238,209,50,0.8)]">
									Save
								</button>
							</form>
						</div>
						<div className="no:w-[100%] md:w-[50%] h-[100%] bg-[#fff] rounded-[20px] no:mt-[15px] md:mt-[0px] md:ml-[15px] px-[20px] py-[20px] flex flex-col justify-start items-center">
							<div className=" font-[700] text-[#272343] text-[20px] mb-[30px] self-start">Hazardous Problem and Solution</div>
							<div className="w-[100%] flex flex-col justify-center items-center mb-[30px]">
								<label htmlFor="problem" className="self-start  font-[400] text-[#272343] text-[18px]">
									Problem Statement<span className=" text-red-600">*</span>
								</label>
								<textarea
									name="problem"
									id="problem"
									cols="30"
									rows="4"
									placeholder="State your hazardous problem you found in your organization/industry...."
									className="border-[1px] border-solid border-[#272343] w-[100%] max-h-[200px] px-[10px] py-[10px]  font-[500] text-[#677094] text-[20px]"
								></textarea>
							</div>
							<div className="w-[100%] flex flex-col justify-center items-center mb-[30px]">
								<label htmlFor="solution" className="self-start  font-[400] text-[#272343] text-[18px]">
									Solution of Hazardous Problem<span className=" text-red-600">*</span>
								</label>
								<textarea
									name="solution"
									id="solution"
									cols="30"
									rows="7"
									placeholder="State your hazardous problem's solution you applied in your organization/industry to solve above stated problem.."
									className="border-[1px] border-solid border-[#272343] w-[100%] max-h-[200px] px-[10px] py-[10px]  font-[500] text-[#677094] text-[20px]"
								></textarea>
							</div>
							<button type="Submit" className="self-center bg-[#EED132] w-[150px] h-[40px] rounded-[20px]  font-[700] text-[#fff] text-[20px] hover:bg-[rgba(238,209,50,0.8)]">
								Submit
							</button>
						</div>
					</div>
				</div>
			</Base>
		</>
	);
};

export default Share;
