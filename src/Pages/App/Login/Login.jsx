import React from "react";
import { classes } from "./classes";
import Divider from "../../../Assets/Divider.svg";
import Logo from "../../../Assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<div className={classes.body}>
			<div className={classes.left.body}>
				<img src={Logo} alt="logo" className={classes.left.img} />
				<p className={classes.left.text}>Welcome</p>
			</div>
			<div className={classes.right.body}>
				<div className={classes.right.heading}>Login</div>
				<form action="/home" className={classes.right.form.body}>
					<input type="text" name="Email" placeholder="Email Address" className={classes.right.form.inputs} />
					<img src={Divider} alt="Divider" className={classes.right.form.img} />
					<input type="text" name="Password" placeholder="Enter Password" className={classes.right.form.inputs} />
					<img src={Divider} alt="Divider" className={classes.right.form.img} />
					<button className={classes.right.form.button1}>
						<NavLink to="/home">Login</NavLink>
					</button>
					<div className={classes.right.form.or}>or connect with google</div>
					<button className={classes.right.form.button2}>
						<NavLink to="/home">Try as Demo user</NavLink>
					</button>
				</form>
				<NavLink to="/signup">
					<p className={classes.right.form.signup}>
						new user? <span className={classes.right.form.link}>create new account</span>
					</p>
				</NavLink>
			</div>
		</div>
	);
};

export default Login;
