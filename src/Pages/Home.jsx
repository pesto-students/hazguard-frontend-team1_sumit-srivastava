import Filter from "../Components/Filter";
import Post from "../Components/Post";
import Base from "./Base";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterAll, sortAll } from "../Utilities/sortAndFilters";

const Home = () => {
	const loading = useSelector((state) => state.loading);
	const allHazards = useSelector((state) => state.allHazards);
	const [filterHazards, setFilterHazards] = useState(allHazards);
	const locationData = new Map();
	const locationOptions = [];
	if (allHazards.length > 0) {
		allHazards.filter((data) => data.isPublic === true);
		allHazards.forEach((data) => {
			locationData.set(`${data.state}, ${data.country}`, data._id);
		});
		locationData.forEach((value, key) => locationOptions.push([key, value]));
	}
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
	useEffect(() => {
		setFilterHazards(allHazards);
	}, [loading]);
	return (
		<Base>
			<div className="w-[100vw] overflow-hidden">
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
				{!loading ? (
					<>
						{filterHazards.length > 0 && <div className="ml-9 text-xl font-semibold sxl:mt-16 md:mt-3">{filterHazards.length} results</div>}
						<Post hazards={filterHazards} />
					</>
				) : (
					<div className="h-[60vh] flex justify-center items-center">
						<svg
							height="200px"
							width="200px"
							version="1.1"
							id="L5"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 100 100"
							enableBackground="new 0 0 0 0"
							xmlSpace="preserve"
						>
							<circle fill="#EED132" stroke="none" cx={6} cy={50} r={6}>
								<animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
							</circle>
							<circle fill="#EED132" stroke="none" cx={30} cy={50} r={6}>
								<animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
							</circle>
							<circle fill="#EED132" stroke="none" cx={54} cy={50} r={6}>
								<animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3" />
							</circle>
						</svg>
					</div>
				)}
			</div>
		</Base>
	);
};

export default Home;
