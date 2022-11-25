const BACKEND = "https://backend.hazguard.tech/";

// Authentication APIs
export const Register_API = `${BACKEND}api/auth/register`;
export const Verify_API = `${BACKEND}api/auth/register/verify`;
export const Login_API = `${BACKEND}api/auth/login`;
export const Logout_API = `${BACKEND}api/auth/logout`;

// User APIs
export const Profile_API = `${BACKEND}api/user/profile`;
export const UpdateProfile_API = `${BACKEND}api/user/updateprofile`;
export const AddToSavedPosts_API = `${BACKEND}api/user/addtosavedposts`;
export const DeleteFromSavedPosts_API = `${BACKEND}api/user/deletefromsavedposts`;
export const AllSavedHazards_API = `${BACKEND}api/user/allsavedposts`;

// Hazard APIs
export const AddHazard_API = `${BACKEND}api/create/hazard`;
export const DeleteHazard_API = `${BACKEND}api/delete/hazard`;
export const ReadAllHazards_API = `${BACKEND}api/read/allhazards`;
export const ReadAllHazardsOfUser_API = `${BACKEND}api/read/allhazardsofuser`;
export const IncreaseView_API = `${BACKEND}api/update/increaseviewcount`;
