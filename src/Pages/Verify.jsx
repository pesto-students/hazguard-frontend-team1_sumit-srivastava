import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { verify } from "../Helpers/auth";

const Verify = () => {
	const { token } = useParams();
	const navigate = useNavigate();
	const verifyUser = (e) => {
		e.preventDefault();
		if (token) {
			verify(token)
				.then((response) => {
					if (!response?.error) {
						toast.success("email verified");
						navigate("/login");
					} else if (response?.error) {
						return toast.error(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to verify! Please try again!");
					console.log(e);
				});
		} else {
			return toast.warning("Could not verify! No token!");
		}
	};
	return (
		<>
			<div className="mt-20 text-center">
				<h2 className="text-3xl font-bold capitalize">Verify Your Email</h2>
				<button
					onClick={(e) => {
						verifyUser(e);
					}}
					type="submit"
					className="mt-10 w-44 py-3 text-lg font-semibold rounded-2xl bg-[#EED132]"
				>
					VERIFY
				</button>
			</div>
		</>
	);
};

export default Verify;
