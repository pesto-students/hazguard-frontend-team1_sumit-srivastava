import { Leaderboard_API } from "../backend";
import { toast } from "react-toastify";

export async function leaderboardData(accessToken) {
	try {
		const response = await fetch(Leaderboard_API, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to get leaderboard! Please try again!");
		return console.log(err);
	}
}
