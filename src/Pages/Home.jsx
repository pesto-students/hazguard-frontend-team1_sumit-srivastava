import Filter from "../Components/Filter";
import Post from "../Components/Post";
import Base from "./Base";
import { useState } from "react";

const Home = () => {
	const [values, setValues] = useState({
		industryType: "",
		hazardType: "",
		hazardLevel: "",
		location: "",
		search: "",
	});
	const { industryType, hazardType, hazardLevel, location, search } = values;
	return (
		<Base>
			<div className="w-[100vw] h-[100vh] overflow-hidden">
				<Filter values={values} setValues={setValues} industryType={industryType} hazardType={hazardType} hazardLevel={hazardLevel} location={location} search={search} />
				<Post />
			</div>
		</Base>
	);
};

export default Home;
