export const filterAll = (allHazards, industryType, hazardType, hazardLevel, location) => {
	if (industryType === "" && hazardType === "" && hazardLevel === "" && location === "") {
		return allHazards;
	} else if (industryType !== "" && hazardType === "" && hazardLevel === "" && location === "") {
		return allHazards.filter((data) => data.industry === industryType);
	} else if (industryType !== "" && hazardType !== "" && hazardLevel === "" && location === "") {
		return allHazards.filter((data) => data.industry === industryType && data.type === hazardType);
	} else if (industryType !== "" && hazardType !== "" && hazardLevel !== "" && location === "") {
		return allHazards.filter((data) => data.industry === industryType && data.type === hazardType && data.hazardLevel === hazardLevel);
	} else if (industryType !== "" && hazardType !== "" && hazardLevel !== "" && location !== "") {
		return allHazards.filter((data) => data.industry === industryType && data.type === hazardType && data.hazardLevel === hazardLevel && data.state === location.split(",")[0]);
	} else if (industryType === "" && hazardType !== "" && hazardLevel === "" && location === "") {
		return allHazards.filter((data) => data.type === hazardType);
	} else if (industryType === "" && hazardType !== "" && hazardLevel !== "" && location === "") {
		return allHazards.filter((data) => data.type === hazardType && data.hazardLevel === hazardLevel);
	} else if (industryType === "" && hazardType !== "" && hazardLevel !== "" && location !== "") {
		return allHazards.filter((data) => data.type === hazardType && data.hazardLevel === hazardLevel && data.state === location.split(",")[0]);
	} else if (industryType === "" && hazardType !== "" && hazardLevel === "" && location !== "") {
		return allHazards.filter((data) => data.type === hazardType && data.state === location.split(",")[0]);
	} else if (industryType !== "" && hazardType === "" && hazardLevel === "" && location !== "") {
		return allHazards.filter((data) => data.industry === industryType && data.state === location.split(",")[0]);
	} else if (industryType === "" && hazardType === "" && hazardLevel === "" && location !== "") {
		return allHazards.filter((data) => data.state === location.split(",")[0]);
	} else if (industryType !== "" && hazardType !== "" && hazardLevel === "" && location !== "") {
		return allHazards.filter((data) => data.industry === industryType && data.type === hazardType && data.state === location.split(",")[0]);
	} else if (industryType === "" && hazardType === "" && hazardLevel !== "" && location === "") {
		return allHazards.filter((data) => data.hazardLevel === hazardLevel);
	} else if (industryType === "" && hazardType === "" && hazardLevel !== "" && location !== "") {
		return allHazards.filter((data) => data.hazardLevel === hazardLevel && data.state === location.split(",")[0]);
	} else if (industryType !== "" && hazardType === "" && hazardLevel !== "" && location !== "") {
		return allHazards.filter((data) => data.industry === industryType && data.hazardLevel === hazardLevel && data.state === location.split(",")[0]);
	} else if (industryType !== "" && hazardType === "" && hazardLevel !== "" && location === "") {
		return allHazards.filter((data) => data.industry === industryType && data.hazardLevel === hazardLevel);
	}
};

export const sortAll = (filterHazards, sortVal) => {
	if (sortVal === "latest") {
		return [...filterHazards]
			.sort((a, b) => {
				return new Date(a.dateOccurred).getTime() - new Date(b.dateOccurred).getTime();
			})
			.reverse();
	} else if (sortVal === "oldest") {
		return [...filterHazards].sort((a, b) => {
			return new Date(a.dateOccurred).getTime() - new Date(b.dateOccurred).getTime();
		});
	} else if (sortVal === "hightolow") {
		return [...sortByLevel(filterHazards, filterHazards.length)].reverse();
	} else if (sortVal === "lowtohigh") {
		return [...sortByLevel(filterHazards, filterHazards.length)];
	} else if (sortVal === "mostviews") {
		return [...filterHazards]
			.sort((a, b) => {
				return a.views - b.views;
			})
			.reverse();
	} else if (sortVal === "leastviews") {
		return [...filterHazards].sort((a, b) => {
			return a.views - b.views;
		});
	}
};

export const sortByLevel = (arr) => {
	let low = 0,
		mid = 0,
		high = arr.length - 1;
	while (mid <= high) {
		if (arr[mid].hazardLevel === "Low") {
			[arr[low], arr[mid]] = [arr[mid], arr[low]];
			low++;
			mid++;
		} else if (arr[mid].hazardLevel === "Moderate") {
			mid++;
		} else if (arr[mid].hazardLevel === "High") {
			[arr[high], arr[mid]] = [arr[mid], arr[high]];
			high--;
		}
	}
	return arr;
};
