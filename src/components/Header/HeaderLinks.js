/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const path = "/services"
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Button color="transparent" className={classes.navLink}>
					<NavLink className={classes.colorInherit} to="/">
						Home
					</NavLink>
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="Servicios"
					buttonProps={{
						className: classes.navLink,
						color: "transparent",
					}}
					buttonIcon={Apps}
					dropdownList={[
						<Link to={`${path}/construccion`}className={classes.dropdownLink}>
							Construcción
						</Link>,
						<Link to={`${path}/industria`} className={classes.dropdownLink}>
							Industria
						</Link>,
						<Link to="/services/ambiente" className={classes.dropdownLink}>
							Medio ambiente
						</Link>,
						<Link to="/services/edificio" className={classes.dropdownLink}>
							Edificio seguro
						</Link>,
						<Link to="/services/capacitaciones" className={classes.dropdownLink}>
							Capacitaciones
						</Link>,
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button color="transparent" className={classes.navLink}>
					<NavLink className={classes.colorInherit} to="/measurements">
						Mediciones
					</NavLink>
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button color="transparent" className={classes.navLink}>
					<NavLink className={classes.colorInherit} to="/contact">
						Contacto
					</NavLink>
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-twitter"
					title="Seguínos en twitter"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="https://twitter.com/BsAs_Safety"
						target="_blank"
						color="transparent"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-twitter"} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-facebook"
					title="Segínos en facebook"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.facebook.com/BsAsSafety/"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-facebook"} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-tooltip"
					title="Seguínos en instagram"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://instagram.com/bsas.safety"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-instagram"} />
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	);
}
