import React from "react";
import {classes} from './classes'

const InternationCard = () => {
	return (
		<div className={classes.card.body}>
			<div className={classes.card.heading}>
				International Subscription
			</div>
			<div className={classes.card.price.body}>
				<span className={classes.card.price.span}>89</span>$
			</div>
			<div className={classes.card.features.body}>
				<div className={classes.card.features.text}>All level of Hazards Solution</div>
				<div className={classes.card.features.text}>Filter by Hazards level will be enabled</div>
				<div className={classes.card.features.text}>
					<span className="text-[#EED132]">Country</span> based company solution
				</div>
				<div className={classes.card.features.text}>Sort by Hazard level will be enabled</div>
			</div>
			<div className={classes.card.button.body}>
				<button className={classes.card.button.upgrade}>Upgrade Account</button>
			</div>
		</div>
	);
};

export default InternationCard;
