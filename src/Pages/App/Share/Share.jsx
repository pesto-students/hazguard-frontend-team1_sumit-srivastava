import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import {classes} from './classes'

const Share = () => {
	return (
		<>
			<div className={classes.page.body}>
				<Navbar />
				<div className={classes.page.maincard}>
					<div className={classes.page.cardOne.body}>
						<div className={classes.page.cardOne.heading}>Hazard Information</div>
						<form action="" className={classes.page.cardOne.formOne.body}>
							<div className={classes.page.cardOne.formOne.field.body}>
								<label htmlFor="type" className={classes.page.cardOne.formOne.field.label}>
									Hazard Type<span className=" text-red-600">*</span>
								</label>
								<select name="type" id="type" className={classes.page.cardOne.formOne.field.select}>
									<option value="" defaultChecked>
										----------------Default----------------
									</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							</div>
							<div className={classes.page.cardOne.formOne.field.body}>
								<label htmlFor="type" className={classes.page.cardOne.formOne.field.label}>
									Hazard Level<span className=" text-red-600">*</span>
								</label>
								<select name="type" id="type" className={classes.page.cardOne.formOne.field.select}>
									<option value="" defaultChecked>
										----------------Default----------------
									</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
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
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
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
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							</div>
							<div className={classes.page.cardOne.formOne.field.body}>
								<label htmlFor="type" className={classes.page.cardOne.formOne.field.label}>
									Damage affection time<span className=" text-red-600">*</span>
								</label>
								<select name="type" id="type" className={classes.page.cardOne.formOne.field.select}>
									<option value="" defaultChecked>
										----------------Default----------------
									</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
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
