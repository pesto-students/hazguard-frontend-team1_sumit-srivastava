import Filter from "../Components/Filter";
import Post from "../Components/Post";
import Base from "./Base";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterAll, sortAll } from "../Utilities/sortAndFilters";

const Saved = () => {
	const userData = useSelector((state) => state.userData);
	const allHazards = useSelector((state) => state.allHazards).filter((data) => userData.saved.includes(data._id));
	const [filterHazards, setFilterHazards] = useState(allHazards);
	const locationData = new Map();
	const locationOptions = [];
	allHazards.forEach((data) => {
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
		setFilterHazards([...filterAll(allHazards, industryType, hazardType, hazardLevel, location)]);
		setValues({ ...values, ["sort"]: "latest" });
	}, [industryType, hazardType, hazardLevel, location]);
	useEffect(() => {
		setFilterHazards([...sortAll(filterHazards, sort)]);
	}, [sort]);
	return (
		<Base>
			<div className="w-[100vw] h-[100vh] overflow-hidden">
				<Filter
					values={values}
					setValues={setValues}
					industryType={industryType}
					hazardType={hazardType}
					hazardLevel={hazardLevel}
					location={location}
					locationOptions={locationOptions}
					sort={sort}
				/>
				{filterHazards.length > 0 && <div className="ml-9 text-xl font-semibold mt-6">{filterHazards.length} results</div>}
				<Post hazards={filterHazards} />
			</div>
		</Base>
	);
};

export default Saved;
