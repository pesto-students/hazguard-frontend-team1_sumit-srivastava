import { Register_API, Login_API, Verify_API, Logout_API } from "../backend";
import { toast } from "react-toastify";

export async function signup(user) {
	try {
		const response = await fetch(Register_API, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to register! Please try again!");
		return console.log(err);
	}
}

export async function verify(token) {
	try {
		const response = await fetch(`${Verify_API}/${token}`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to verify! Please try again!");
		return console.log(err);
	}
}

export async function login(user) {
	try {
		const response = await fetch(Login_API, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to login! Please try again!");
		return console.log(err);
	}
}

export async function logout(refreshToken) {
	try {
		const response = await fetch(Logout_API, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ token: refreshToken }),
		});
		return await response.json();
	} catch (err) {
		toast.error("Not able to logout! Please try again!");
		return console.log(err);
	}
}
