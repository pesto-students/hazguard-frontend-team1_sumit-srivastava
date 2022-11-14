import React, { useState } from "react";
import { DropDown, Search } from "../../Assets/library";
import { classes } from "./classes";

const Filter = () => {
	const [toggleOne, setToogleOne] = useState(false);
	return (
		<div className={classes.body}>
			<div className={classes.sort.body}>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Industry type</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Chemical</p>
						<DropDown />
						<select name="industry-type" id="industry-type" className="no:hidden">
							Chemical
							<option value="Chemical">Chemical</option>
							<option value="Mechanical">Mechanical</option>
							<option value="Oil-Chemical">Oil-Chemical</option>
						</select>
					</div>
				</div>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Hazard type</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Safety</p>
						<DropDown />
					</div>
				</div>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Hazard Level</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Innocuous</p>
						<DropDown />
					</div>
				</div>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Location</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Gujarat</p>
						<DropDown />
					</div>
				</div>
			</div>
			<div className={classes.search.body}>
				<input type="text" className={classes.search.searchInput} placeholder="search here" />
				<Search />
			</div>
		</div>
	);
};

export default Filter;
