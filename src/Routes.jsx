import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/App/Home/Home";
import Pricing from "./Pages/App/Pricing/Pricing";
import Saved from "./Pages/App/Saved/Saved";
import Signup from "./Pages/App/Signup/Signup";
import Login from "./Pages/App/Login/Login";
import Account from "./Pages/App/Account/Account";
import Post from "./Pages/App/Post/PostPage";

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
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/account" element={<Account />} />
				<Route exact path="/post" element={<Post />} />
			</RouterRoutes>
		</BrowserRouter>
	);
}
