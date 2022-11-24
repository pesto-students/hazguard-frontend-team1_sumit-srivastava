import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
// import Landing from "./Pages/Landing";
// import Home from "./Pages/Home";
// import Pricing from "./Pages/Pricing";
// import Saved from "./Pages/Saved";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
// import Account from "./Pages/Account";
// import Post from "./Pages/PostPage";
// import Share from "./Pages/Share";
// import Verify from "./Pages/Verify";
// import MyPosts from "./Pages/MyPosts";
import { Landing, Home, Pricing, Saved, Register, Login, Account, Post, Share, Verify, MyPosts, Leaderboard } from "./Pages/Library";
import { useSelector } from "react-redux";

export default function Routes() {
	const userData = useSelector((state) => state.userData);
	const refreshToken = useSelector((state) => state.refreshToken);
	const accessToken = useSelector((state) => state.accessToken);
	function PrivateRoute({ children }) {
		if (userData && refreshToken && accessToken) {
			return children;
		} else {
			return <Navigate to="/login" replace={false} />;
		}
	}
	return (
		<BrowserRouter>
			<RouterRoutes>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/register" element={!userData ? <Register /> : <Navigate to="/home" replace={false} />} />
				<Route exact path="/verify/:token" element={!userData ? <Verify /> : <Navigate to="/home" replace={false} />} />
				<Route exact path="/login" element={!userData ? <Login /> : <Navigate to="/home" replace={false} />} />
				<Route
					exact
					path="/home"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				{/* <Route
					exact
					path="/pricing"
					element={
						<PrivateRoute>
							<Pricing />
						</PrivateRoute>
					}
				/> */}
				<Route
					exact
					path="/mypost"
					element={
						<PrivateRoute>
							<MyPosts />
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
					path="/leaderboard"
					element={
						<PrivateRoute>
							<Leaderboard />
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
					path="/post"
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
