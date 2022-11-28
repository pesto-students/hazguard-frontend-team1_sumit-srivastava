import { AddToSavedPosts_API, DeleteFromSavedPosts_API } from "../backend";
import { toast } from "react-toastify";

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
