import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/App/Home/Home";

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
			</RouterRoutes>
		</BrowserRouter>
	);
}
