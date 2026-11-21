import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/serviceContentStyle.js";

const useStyles = makeStyles(styles);

export default function ServiceContent({ intro, items, norms, image, alt }) {
	const classes = useStyles();
	return (
		<div className={classes.wrapper}>
			<div className={classes.text}>
				{intro.map((paragraph, key) => (
					<p key={key} className={classes.paragraph}>
						{paragraph}
					</p>
				))}
				{items.length > 0 && (
					<ul className={classes.list}>
						{items.map((item, key) => (
							<li key={key} className={classes.listItem}>
								{item}
							</li>
						))}
					</ul>
				)}
				{norms.length > 0 && (
					<div className={classes.norms}>
						<span className={classes.normsLabel}>Normativa</span>
						{norms.map((norm, key) => (
							<span key={key} className={classes.chip}>
								{norm}
							</span>
						))}
					</div>
				)}
			</div>
			{image && (
				<div className={classes.media}>
					<img src={image} alt={alt} className={classes.image} />
				</div>
			)}
		</div>
	);
}

ServiceContent.defaultProps = {
	intro: [],
	items: [],
	norms: [],
	alt: "",
};

ServiceContent.propTypes = {
	intro: PropTypes.arrayOf(PropTypes.string),
	items: PropTypes.arrayOf(PropTypes.string),
	norms: PropTypes.arrayOf(PropTypes.string),
	image: PropTypes.string,
	alt: PropTypes.string,
};
