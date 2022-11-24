const BACKEND = "https://backend.hazguard.tech/";

// Authentication APIs
export const Register_API = `${BACKEND}api/auth/register`;
export const Verify_API = `${BACKEND}api/auth/register/verify`;
export const Login_API = `${BACKEND}api/auth/login`;
export const Profile_API = `${BACKEND}api/auth/profile`;
export const Logout_API = `${BACKEND}api/auth/logout`;
export const UpdateProfile_API = `${BACKEND}api/auth/updateprofile`;

// Hazard APIs
export const AddHazard_API = `${BACKEND}api/create/hazard`;
export const DeleteHazard_API = `${BACKEND}api/delete/hazard`;
