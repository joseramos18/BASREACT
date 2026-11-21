import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

const address = "Inclán 3732, Boedo, Buenos Aires";
const whatsappUrl =
	"https://wa.me/5491121652635?text=Me gustaría más información acerca de los servicios que ofrecen";

export default function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<div className={classes.columns}>
					<div>
						<h4 className={classes.brand}>Buenos Aires Safety</h4>
						<p className={classes.text}>
							Consultora de seguridad, higiene y medio ambiente.
						</p>
						<a
							className={classes.link}
							href={
								"https://www.google.com/maps/search/?api=1&query=" +
								encodeURIComponent(address)
							}
							target="_blank"
							rel="noopener noreferrer"
						>
							{address}
						</a>
					</div>
					<div>
						<h5 className={classes.heading}>Servicios</h5>
						<ul className={classes.list}>
							<li><Link className={classes.link} to="/services/construccion">Construcción</Link></li>
							<li><Link className={classes.link} to="/services/industria">Industria</Link></li>
							<li><Link className={classes.link} to="/services/ambiente">Medio ambiente</Link></li>
							<li><Link className={classes.link} to="/services/edificio">Edificio seguro</Link></li>
							<li><Link className={classes.link} to="/services/capacitaciones">Capacitaciones</Link></li>
							<li><Link className={classes.link} to="/measurements">Mediciones</Link></li>
						</ul>
					</div>
					<div>
						<h5 className={classes.heading}>Contacto</h5>
						<ul className={classes.list}>
							<li>
								<a className={classes.link} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
									WhatsApp +54 9 11 2165-2635
								</a>
							</li>
							<li><Link className={classes.link} to="/contact">Formulario de contacto</Link></li>
						</ul>
						<div className={classes.social}>
							<a className={classes.socialLink} href="https://www.facebook.com/BsAsSafety/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
								<i className="fab fa-facebook" />
							</a>
							<a className={classes.socialLink} href="https://instagram.com/bsas.safety" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
								<i className="fab fa-instagram" />
							</a>
							<a className={classes.socialLink} href="https://twitter.com/BsAs_Safety" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
								<i className="fab fa-twitter" />
							</a>
						</div>
					</div>
				</div>
				<div className={classes.bottom}>
					&copy; {new Date().getFullYear()} Buenos Aires Safety. Consultora de
					seguridad e higiene.
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	whiteFont: PropTypes.bool,
};
