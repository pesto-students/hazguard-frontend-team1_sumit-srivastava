import Filter from "../Components/Filter";
import Post from "../Components/Post";
import Base from "./Base";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterAll, sortAll } from "../Utilities/sortAndFilters";

const MyPosts = () => {
	const allHazardsOfUser = useSelector((state) => state.allHazardsOfUser);
	const [filterHazards, setFilterHazards] = useState(allHazardsOfUser);
	const locationData = new Map();
	const locationOptions = [];
	allHazardsOfUser.forEach((data) => {
		locationData.set(`${data.state},${data.country}`, data._id);
	});
	locationData.forEach((value, key) => locationOptions.push([key, value]));
	const [values, setValues] = useState({
		industryType: "",
		hazardType: "",
		hazardLevel: "",
		location: "",
		sort: "latest",
	});
	const { industryType, hazardType, hazardLevel, location, sort } = values;
	useEffect(() => {
		setFilterHazards([...filterAll(allHazardsOfUser, industryType, hazardType, hazardLevel, location)]);
		setValues({ ...values, ["sort"]: "latest" });
	}, [industryType, hazardType, hazardLevel, location]);
	useEffect(() => {
		setFilterHazards([...sortAll(filterHazards, sort)]);
	}, [sort]);
	return (
		<Base>
			<div className="w-[100vw] h-[100vh] overflow-hidden">
				<Filter values={values} setValues={setValues} industryType={industryType} hazardType={hazardType} hazardLevel={hazardLevel} location={location} locationOptions={locationOptions} />
				<Post values={values} setValues={setValues} sort={sort} hazards={filterHazards} fromMyPosts={true} />
			</div>
		</Base>
	);
};

export default MyPosts;
