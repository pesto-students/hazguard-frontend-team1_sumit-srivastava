import Filter from "../Components/Filter";
import Post from "../Components/Post";
import Base from "./Base";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
	const [values, setValues] = useState({
		industryType: "",
		hazardType: "",
		hazardLevel: "",
		location: "",
		search: "",
	});
	const { industryType, hazardType, hazardLevel, location, search } = values;
	const allHazards = useSelector((state) => state.allHazards);
	return (
		<Base>
			<div className="w-[100vw] overflow-hidden">
				<Filter values={values} setValues={setValues} industryType={industryType} hazardType={hazardType} hazardLevel={hazardLevel} location={location} search={search} />
				<Post hazards={allHazards} />
			</div>
		</Base>
	);
};

export default Home;
