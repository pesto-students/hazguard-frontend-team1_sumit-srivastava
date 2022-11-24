import { AddHazard_API, DeleteHazard_API } from "../backend";
import { toast } from "react-toastify";

export async function addHazard(info, accessToken) {
	try {
		const response = await fetch(AddHazard_API, {
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
		toast.error("Not able to add hazard! Please try again!");
		return console.log(err);
	}
}

export async function deleteHazard(info, accessToken) {
	try {
		const response = await fetch(DeleteHazard_API, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(info),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to delete hazard! Please try again!");
		return console.log(err);
	}
}
