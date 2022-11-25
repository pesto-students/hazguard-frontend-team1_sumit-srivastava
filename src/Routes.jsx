import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import { Landing, Home, Saved, Register, Login, Account, Post, AddHazard, Verify, MyPosts, Leaderboard } from "./Pages/Library";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { readAllHazards, readAllHazardsOfUser } from "./Helpers/hazard";
import { setAllHazards, setAllHazardsOfUser, setAllSavedHazardsOfUser } from "./Store/storingData";
import { readAllSavedHazards } from "./Helpers/user";

export default function Routes() {
	const dispatch = useDispatch();
	const checkChange = useSelector((state) => state.checkChange);
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
	useEffect(() => {
		if (userData && refreshToken && accessToken) {
			const getAllHazards = async () => {
				const allHazards = await readAllHazards(accessToken)
					.then((response) => {
						if (!response?.error) {
							return response;
						} else if (response?.error) {
							return toast.error(response?.message);
						}
					})
					.catch((e) => {
						toast.error("Not able to get hazards! Please try again!");
						console.log(e);
					});
				dispatch(setAllHazards(allHazards.data));
			};
			getAllHazards();
			const getAllHazardsOfUser = async () => {
				const allHazardsOfUser = await readAllHazardsOfUser(accessToken)
					.then((response) => {
						if (!response?.error) {
							return response;
						} else if (response?.error) {
							return toast.error(response?.message);
						}
					})
					.catch((e) => {
						toast.error("Not able to get hazards! Please try again!");
						console.log(e);
					});
				dispatch(setAllHazardsOfUser(allHazardsOfUser.data));
			};
			getAllHazardsOfUser();
			const getAllSavedHazardsOfUser = async () => {
				const allSavedHazardsOfUser = await readAllSavedHazards(accessToken)
					.then((response) => {
						if (!response?.error) {
							return response;
						} else if (response?.error) {
							return toast.error(response?.message);
						}
					})
					.catch((e) => {
						toast.error("Not able to get hazards! Please try again!");
						console.log(e);
					});
				dispatch(setAllSavedHazardsOfUser(allSavedHazardsOfUser.data));
			};
			getAllSavedHazardsOfUser();
		}
	}, [checkChange]);
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
					path="/myposts"
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
					path="/post/:hazardId"
					element={
						<PrivateRoute>
							<Post />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/addhazard"
					element={
						<PrivateRoute>
							<AddHazard />
						</PrivateRoute>
					}
				/>
			</RouterRoutes>
		</BrowserRouter>
	);
}
