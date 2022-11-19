import React, { useState } from "react";
import { DropDown, Search } from "../../Assets/library";
import { classes } from "./classes";

const Filter = () => {
	const handleDropDown = () => {
		document.getElementById('industry').click();
	}
	return (
		<div className={classes.body}>
			<div className={classes.sort.body}>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Industry type</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Chemical</p>
						<img src={DropDown} alt='dropdown' className="cursor-pointer"/>
						<select name="industry-type" id="industry" className={`hidden bg-[url('data:image/svg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIwIDEwIj48cGF0aCBmaWxsPSIjNjc3MDk0IiBkPSJNMS4zMDIgMGgxNi43NWMxLjE2IDAgMS43MzkgMS4yMzkuOTE4IDEuOTY1TDEwLjYgOS4zODJjLS41MDguNDUtMS4zMzUuNDUtMS44NDMgMEwuMzg0IDEuOTY1Qy0uNDM2IDEuMjQuMTQ0IDAgMS4zMDIgMFoiLz48L3N2Zz4=')]`}>
							<option value=""></option>
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
						<img src={DropDown} alt='dropdown' className="cursor-pointer"/>
					</div>
				</div>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Hazard Level</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Innocuous</p>
						<img src={DropDown} alt='dropdown' className="cursor-pointer"/>
					</div>
				</div>
				<div className={classes.sort.types.body}>
					<p className={classes.sort.types.typeHeading}>Location</p>
					<div className={classes.sort.types.selContainer.body}>
						<p className={classes.sort.types.selContainer.text}>Gujarat</p>
						<img src={DropDown} alt='dropdown' className="cursor-pointer"/>
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
