import React from "react";
import { classes } from "./classes";

const SortBy = () => {
	return (
		<div className={classes.body}>
			<div className={classes.button.body}>
				<button className={classes.button.buttonText}>Upgrade Account</button>
			</div>
			<div className={classes.sortBy.body}>
				<div className={classes.sortBy.heading}>Sort By</div>
				<div className={classes.sortBy.options.body}>
					<input type="checkbox" name="Date" id="date" className={classes.sortBy.options.checkbox} />
					<div className={classes.sortBy.options.text}>Date</div>
				</div>
				<div className="flex">
					<input type="checkbox" name="Date" id="date" className={classes.sortBy.options.checkbox} />
					<div className={classes.sortBy.options.text}>Hazard-Level</div>
				</div>
				<div className="flex">
					<input type="checkbox" name="Date" id="date" className={classes.sortBy.options.checkbox} />
					<div className={classes.sortBy.options.text}>Views</div>
				</div>
			</div>
			<div className={classes.ranks.body}>
				<div className={classes.ranks.heading}>Rankings</div>
				<div className={classes.ranks.tableHeading}>
					<div>Rank</div>
					<div>Industry Name</div>
					<div>Posts</div>
				</div>
				<div className={classes.ranks.numbers}>
					<div>1</div>
					<div>Adani Industries</div>
					<div>20</div>
				</div>
				<div className={classes.ranks.numbers}>
					<div>2</div>
					<div>Godrej Industries</div>
					<div>17</div>
				</div>
				<div className={classes.ranks.numbers}>
					<div>3</div>
					<div>Tata Motors Ltd</div>
					<div>15</div>
				</div>
				<div className={classes.ranks.numbers}>
					<div>4</div>
					<div>Reliance Industries</div>
					<div>10</div>
				</div>
				<div className={classes.ranks.numbers}>
					<div>5</div>
					<div>Nirma Chemicals</div>
					<div>9</div>
				</div>
				<div className={classes.ranks.myrank}>Your rank: 03</div>
			</div>
		</div>
	);
};

export default SortBy;
