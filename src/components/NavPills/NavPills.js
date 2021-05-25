import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/components/navPillsStyle.js";

const useStyles = makeStyles(styles);

export default function NavPills({
	tabs,
	color,
	direction,
	activePill,
	setActivePill,
	isMeasurement,
}) {
	const history = useHistory();
	var miMapa = new Map();
	miMapa.set(0, "construccion");
	miMapa.set(1, "industria");
	miMapa.set(2, "ambiente");
	miMapa.set(3, "edificio");
	miMapa.set(4, "capacitaciones");
	const handleChange = (event, active) => {
		if (isMeasurement) {
      setActivePill(active)
		} else {
			const path = miMapa.get(active);
			history.push(`/services/${path}`);
		}
	};
	const handleChangeIndex = (index) => {
		if (isMeasurement) {
      setActivePill(index)
		} else {
			const path = miMapa.get(index);
			history.push(`/services/${path}`);
		}
	};
	const classes = useStyles();
	const flexContainerClasses = classNames({
		[classes.flexContainer]: true,
	});
	const tabButtons = (
		<Tabs
			classes={{
				root: classes.root,
				fixed: classes.fixed,
				flexContainer: flexContainerClasses,
				indicator: classes.displayNone,
			}}
			value={activePill}
			onChange={handleChange}
		>
			{tabs.map((prop, key) => {
				var icon = {};
				if (prop.tabIcon !== undefined) {
					icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
				}
				const pillsClasses = classNames({
					[classes.pills]: true,
					[classes.pillsWithIcons]: prop.tabIcon !== undefined,
				});
				return (
					<Tab
						label={prop.tabButton}
						key={key}
						{...icon}
						classes={{
							root: pillsClasses,
							selected: classes[color],
							wrapper: classes.tabWrapper,
						}}
					/>
				);
			})}
		</Tabs>
	);
	const tabContent = (
		<div className={classes.contentWrapper}>
			<SwipeableViews
				axis={direction === "rtl" ? "x-reverse" : "x"}
				index={activePill}
				onChangeIndex={handleChangeIndex}
			>
				{tabs.map((prop, key) => {
					return (
						<div
							key={key}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							{prop.tabContent}
							<img
								src={prop.tabImg}
								style={{
									width: "90vh",
								}}
							/>
						</div>
					);
				})}
			</SwipeableViews>
		</div>
	);
	return (
		<div>
			{tabButtons}
			{tabContent}
			<GridItem md={12} className={classes.textCenter}>
				<Link to={"/contact"} className={classes.link}>
					<Button color="primary" size="lg" simple>
						Solicite presupuesto
					</Button>
				</Link>
			</GridItem>
		</div>
	);
}

NavPills.defaultProps = {
	active: 0,
	color: "primary",
};

NavPills.propTypes = {
	// index of the default active pill
	active: PropTypes.number,
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			tabButton: PropTypes.string,
			tabIcon: PropTypes.object,
			tabContent: PropTypes.node,
		})
	).isRequired,
	color: PropTypes.oneOf([
		"primary",
		"warning",
		"danger",
		"success",
		"info",
		"rose",
	]),
	direction: PropTypes.string,
	alignCenter: PropTypes.bool,
};
