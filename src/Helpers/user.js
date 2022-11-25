import { AllSavedHazards_API } from "../backend";
import { toast } from "react-toastify";

export async function readAllSavedHazards(accessToken) {
	try {
		const response = await fetch(AllSavedHazards_API, {
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
