import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { BackArrow } from "../../../Assets/library";
import { NavLink } from "react-router-dom";
import Post from "../../../Components/Post/Post";
import SinglePost from "../../../Components/SinglePost/SinglePost";
import {classes} from './classes'

const Account = () => {
	return (
		<div className={classes.page}>
			<div className={classes.accountCard.body}>
				<NavLink to="/home">
					<img src={BackArrow} alt="back" className={classes.accountCard.backbutton} />
				</NavLink>
				<div className={classes.accountCard.Profile.body}>
					<div className={classes.accountCard.Profile.heading.body}>
						<p className={classes.accountCard.Profile.heading.text}>My Profile</p>
					</div>
					<div className={classes.accountCard.Profile.formContainer.body}>
						<div className={classes.accountCard.Profile.formContainer.profileIcon}>
							G
						</div>
						<form action="/" className={classes.accountCard.Profile.formContainer.form.body}>
							<div className={classes.accountCard.Profile.formContainer.form.card.body}>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="companyName" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										Company Name
									</label>
									<input
										type="text"
										name="companyName"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="Godrej Industries"
									/>
								</div>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="email" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										Email Adress
									</label>
									<input
										type="text"
										name="email"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="safety@godrej.com"
									/>
								</div>
							</div>
							<div className={classes.accountCard.Profile.formContainer.form.card.body}>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="companyType" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										Company Type
									</label>
									<select
										name="companyType"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.select}
									>
										<option value="">Default</option>
										<option value="Manufacturing">Manufacturing</option>
										<option value="Chemical">Chemical</option>
										<option value="Oil-Fertilizer">Oil-Fertilizer</option>
										<option value="Petroleum">Petroleum</option>
									</select>
								</div>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="Number" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										Mobile Number
									</label>
									<input
										type="text"
										name="Number"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="+91 1234567890"
									/>
								</div>
							</div>
							<div className={classes.accountCard.Profile.formContainer.form.card.body}>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="companyLocation" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										Company Location
									</label>
									<input
										type="text"
										name="companyLocation"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="Dahej, Gujarat"
									/>
								</div>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="Department" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										Department Name
									</label>
									<input
										type="text"
										name="Department"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="Safety Department"
									/>
								</div>
							</div>
							<div className={classes.accountCard.Profile.formContainer.changePassword}>Change Password</div>
							<div className={classes.accountCard.Profile.formContainer.form.card.body}>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="currentPassword" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										Current Password
									</label>
									<input
										type="text"
										name="currentPassword"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="Dahej, Gujarat"
									/>
								</div>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="newPassword" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										New Password
									</label>
									<input
										type="text"
										name="newPassword"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="Safety Department"
									/>
								</div>
							</div>
							<div className={classes.accountCard.Profile.formContainer.form.card.body}>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="confirmPassword" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										Confirm Password
									</label>
									<input
										type="text"
										name="confirmPassword"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="Dahej, Gujarat"
									/>
								</div>
								<div className={classes.accountCard.Profile.formContainer.form.card.fieldOne.body}>
									<label htmlFor="OneTimePassword" className={classes.accountCard.Profile.formContainer.form.card.fieldOne.label}>
										One Time Password
									</label>
									<input
										type="text"
										name="OneTimePassword"
										className={classes.accountCard.Profile.formContainer.form.card.fieldOne.input}
										placeholder="Safety Department"
									/>
								</div>
							</div>
							<button className={classes.accountCard.Profile.formContainer.form.card.button}>
								Save & Exit
							</button>
						</form>
					</div>
				</div>
				<div className={classes.accountCard.Profile.myPost.body}>
					<div className={classes.accountCard.Profile.myPost.heading}>My Posts</div>
					<div className={classes.accountCard.Profile.myPost.post}>
						<SinglePost />
					</div>
					<div className={classes.accountCard.Profile.myPost.post}>
						<SinglePost />
					</div>
					<div className={classes.accountCard.Profile.myPost.post}>
						<SinglePost />
					</div>
					<div className={classes.accountCard.Profile.myPost.post}>
						<SinglePost />
					</div>
					<div className={classes.accountCard.Profile.myPost.post}>
						<SinglePost />
					</div>
					<div className={classes.accountCard.Profile.myPost.post}>
						<SinglePost />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
