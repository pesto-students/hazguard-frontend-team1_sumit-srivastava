import { AddHazard_API, DeleteHazard_API, ReadAllHazards_API, ReadAllHazardsOfUser_API, IncreaseView_API, EditHazard_API } from "../backend";
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

export async function readAllHazards(accessToken) {
	try {
		const response = await fetch(ReadAllHazards_API, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to get hazards! Please try again!");
		return console.log(err);
	}
}

export async function readAllHazardsOfUser(accessToken) {
	try {
		const response = await fetch(ReadAllHazardsOfUser_API, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to get hazards! Please try again!");
		return console.log(err);
	}
}

export async function increaseViewCount(info, accessToken) {
	try {
		const response = await fetch(IncreaseView_API, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(info),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to increase view count! Please try again!");
		return console.log(err);
	}
}

export async function editHazard(info, accessToken) {
	try {
		const response = await fetch(EditHazard_API, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(info),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to edit hazard! Please try again!");
		return console.log(err);
	}
}
