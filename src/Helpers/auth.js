import { Register_API, Login_API, Verify_API, Profile_API, Logout_API, UpdateProfile_API } from "../backend";
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
