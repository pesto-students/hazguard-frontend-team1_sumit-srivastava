import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { classes } from "./classes";

const Share = () => {
	return (
		<>
			<Navbar />
			<div className={classes.page.body}>
				<div className={classes.page.maincard}>
					<div className={classes.page.cardOne.body}>
						<div className={classes.page.cardOne.heading}>Hazard Information</div>
						<form action="" className={classes.page.cardOne.formOne.body}>
							<div className={classes.page.cardOne.formOne.field.body}>
								<label htmlFor="type" className={classes.page.cardOne.formOne.field.label}>
									Hazard Type<span className=" text-red-600">*</span>
								</label>
								<select name="type" id="type" className={classes.page.cardOne.formOne.field.select}>
									<option
										value=""
										defaultChecked
										className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										----------------Default----------------
									</option>
									<option
										value="Biological"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Biological
									</option>
									<option
										value="Chemical"
										className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Chemical
									</option>
									<option
										value="Physical"
										className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Physical
									</option>
									<option
										value="Safety"
										className="font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Safety
									</option>
								</select>
							</div>
							<div className={classes.page.cardOne.formOne.field.body}>
								<label htmlFor="level" className={classes.page.cardOne.formOne.field.label}>
									Hazard Level<span className=" text-red-600">*</span>
								</label>
								<select name="level" id="level" className={classes.page.cardOne.formOne.field.select}>
									<option
										value=""
										defaultChecked
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										----------------Default----------------
									</option>
									<option
										value="Low"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Low
									</option>
									<option
										value="Moderate"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Moderate
									</option>
									<option
										value="High"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										High
									</option>
								</select>
							</div>
							<div className={classes.page.cardOne.formOne.field.body}>
								<label htmlFor="type" className={classes.page.cardOne.formOne.field.label}>
									Preferrable Industry types<span className=" text-red-600">*</span>
								</label>
								<select name="type" id="type" className={classes.page.cardOne.formOne.field.select}>
									<option value="" defaultChecked>
										----------------Default----------------
									</option>
									<option
										value="Chemical"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Chemical
									</option>
									<option
										value="Oil&Gas-Production"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Oil & Gas Production
									</option>
									<option
										value="Mining"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Mining
									</option>
									<option
										value="Agriculture"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Agriculture
									</option>
									<option
										value="Apparel"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Apparel
									</option>
									<option
										value="Construction"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Construction
									</option>
									<option
										value="Forestry"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Forestry
									</option>
									<option
										value="Shipping"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Shipping
									</option>
									<option
										value="Transport"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Transport
									</option>
									<option
										value="Utilities"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Utilities
									</option>
								</select>
							</div>
							<div className={classes.page.cardOne.formOne.field.body}>
								<label htmlFor="type" className={classes.page.cardOne.formOne.field.label}>
									Type of damage caused by Hazard<span className=" text-red-600">*</span>
								</label>
								<select name="type" id="type" className={classes.page.cardOne.formOne.field.select}>
									<option value="" defaultChecked>
										----------------Default----------------
									</option>
									<option
										value="Economical"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Economical
									</option>
									<option
										value="Physical"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Physical
									</option>
									<option
										value="Manpower"
										className=" font-[Arial] font-[700] text-[#677094] text-[15px] h-[30px] hover:bg-[#677094] w-[100%] text-center hover:text-[#fff] cursor-pointer"
									>
										Manpower
									</option>
								</select>
							</div>
							<div className={classes.page.cardOne.formOne.field.body}>
								<label htmlFor="type" className={classes.page.cardOne.formOne.field.label}>
									Damage affection time<span className=" text-red-600">*</span>
								</label>
								<input type="text" id="type" className={`${classes.page.cardOne.formOne.field.select} cursor-text`} />
							</div>
							<button type="save" className={classes.page.cardOne.formOne.button}>
								Save
							</button>
						</form>
					</div>
					<div className={classes.page.cardOne.formTwo.body}>
						<div className={classes.page.cardOne.formTwo.heading}>Hazardous Problem and Solution</div>
						<div className={classes.page.cardOne.formTwo.field.body}>
							<label htmlFor="problem" className={classes.page.cardOne.formTwo.field.label}>
								Problem Statement<span className=" text-red-600">*</span>
							</label>
							<textarea
								name="problem"
								id="problem"
								cols="30"
								rows="4"
								placeholder="State your hazardous problem you found in your organization/industry...."
								className={classes.page.cardOne.formTwo.field.textarea}
							></textarea>
						</div>
						<div className={classes.page.cardOne.formTwo.field.body}>
							<label htmlFor="solution" className={classes.page.cardOne.formTwo.field.label}>
								Solution of Hazardous Problem<span className=" text-red-600">*</span>
							</label>
							<textarea
								name="solution"
								id="solution"
								cols="30"
								rows="7"
								placeholder="State your hazardous problem’s solution you applied in your organization/industry to solve above stated problem.."
								className={classes.page.cardOne.formTwo.field.textarea}
							></textarea>
						</div>
						<button type="Submit" className={classes.page.cardOne.formTwo.button}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Share;
