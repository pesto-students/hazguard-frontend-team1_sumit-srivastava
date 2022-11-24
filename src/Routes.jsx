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
import Verify from "./Pages/Verify";
import { useSelector } from "react-redux";

export default function Routes() {
	const userData = useSelector((state) => state.userData);
	const refreshToken = useSelector((state) => state.refreshToken);
	const accessToken = useSelector((state) => state.accessToken);
	function PrivateRoute({ children }) {
		if (userData && refreshToken && accessToken) {
			return children;
		} else {
			return <Navigate to="/login" replace={true} />;
		}
	}
	return (
		<BrowserRouter>
			<RouterRoutes>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/register" element={!userData ? <Register /> : <Navigate to="/home" replace={true} />} />
				<Route exact path="/verify/:token" element={!userData ? <Verify /> : <Navigate to="/home" replace={true} />} />
				<Route exact path="/login" element={!userData ? <Login /> : <Navigate to="/home" replace={true} />} />
				<Route
					exact
					path="/home"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/pricing"
					element={
						<PrivateRoute>
							<Pricing />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/saved"
					element={
						<PrivateRoute>
							<Saved />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/account"
					element={
						<PrivateRoute>
							<Account />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/post/:id"
					element={
						<PrivateRoute>
							<Post />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/share"
					element={
						<PrivateRoute>
							<Share />
						</PrivateRoute>
					}
				/>
			</RouterRoutes>
		</BrowserRouter>
	);
}
