import { ErrorSVG } from "../Assets/library";

const PageNotFound = () => {
	return (
		<div className="flex justify-center items-center">
			<img className="mt-32" src={ErrorSVG} width={"500px"} height={"400px"} alt="" />
		</div>
	);
};

export default PageNotFound;
