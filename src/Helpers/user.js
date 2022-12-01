import { AddToSavedPosts_API, DeleteFromSavedPosts_API, Profile_API, UpdateProfile_API } from "../backend";
import { toast } from "react-toastify";

export async function profile(accessToken) {
	try {
		const response = await fetch(Profile_API, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to get profile! Please try again!");
		return console.log(err);
	}
}

export async function updateProfile(user, accessToken) {
	try {
		const response = await fetch(UpdateProfile_API, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to logout! Please try again!");
		return console.log(err);
	}
}

export async function addToSavedPosts(info, accessToken) {
	try {
		const response = await fetch(AddToSavedPosts_API, {
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
		toast.error("Not able to add to saved hazards! Please try again!");
		return console.log(err);
	}
}

export async function removeFromSavedPosts(info, accessToken) {
	try {
		const response = await fetch(DeleteFromSavedPosts_API, {
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
		toast.error("Not able to remove from saved hazards! Please try again!");
		return console.log(err);
	}
}
