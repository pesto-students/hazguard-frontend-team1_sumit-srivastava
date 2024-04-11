import { Leaderboard_API, CreateSubscription_API, VerifyPayment_API } from "../backend";
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

export async function createSubscription(info, accessToken) {
	try {
		const response = await fetch(CreateSubscription_API, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(info),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to create subscription! Please try again!");
		return console.log(err);
	}
}

export async function verifyPayment(info, accessToken) {
	try {
		const response = await fetch(VerifyPayment_API, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(info),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to verify payment! Please try again!");
		return console.log(err);
	}
}
