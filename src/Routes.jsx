import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Saved from "./Pages/Saved";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import Post from "./Pages/PostPage";
import Share from "./Pages/Share";

export default function Routes() {
	// function PrivateRoute({ children }) {
	// 	if (true) {
	// 		return children;
	// 	} else {
	// 		return <Navigate to="/login" />;
	// 	}
	// }
	return (
		<BrowserRouter>
			<RouterRoutes>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/pricing" element={<Pricing />} />
				<Route exact path="/saved" element={<Saved />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/account" element={<Account />} />
				<Route exact path="/post" element={<Post />} />
				<Route exact path="/share" element={<Share />} />
			</RouterRoutes>
		</BrowserRouter>
	);
}
