import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import ServiceContent from "components/ServiceContent/ServiceContent.js";

import SectionPills from "../Components/Sections/SectionPills";
import { useParams } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const services = [
	{
		slug: "construccion",
		navTitle: "Construcción",
		intro: ["Ofrecemos la confección y presentación ante ART de:"],
		items: [
			"Programa de Seguridad según el tipo de obra",
			"Aviso de obra",
			"Capacitaciones para la prevención en obra: semanal, quincenal y/o mensual",
			"Auditorías de cumplimiento según normativa vigente",
			"Confección de legajos técnicos según exigencia del contratista principal o del comitente",
		],
		norms: ["Res. SRT 51/97", "Res. SRT 35/98", "Res. SRT 319/99"],
		tabImg: require("assets/img/construction.png"),
	},
	{
		slug: "industria",
		navTitle: "Industria",
		intro: [
			"Brindamos asesoramiento según los requerimientos legales establecidos por el Dec. 351/79, reglamentario de la Ley 19.587/72, el Dec. 1338/96 y las modificaciones de la Ley 24.557/95 de Riesgos del Trabajo.",
		],
		items: [
			"Auditorías de cumplimiento legal en Seguridad e Higiene Laboral acorde al tipo de establecimiento",
			"Confección de estadísticas sobre indicadores de Seguridad y Salud Ocupacional",
			"Cumplimiento de las exigencias de la Superintendencia de Riesgos del Trabajo, ART y otros organismos oficiales",
		],
		norms: ["Ley 19.587/72", "Dec. 351/79", "Dec. 1338/96", "Ley 24.557/95"],
		tabImg: require("assets/img/industry.png"),
	},
	{
		slug: "ambiente",
		navTitle: "Medio ambiente",
		intro: [
			"Ofrecemos un servicio integral de Medio Ambiente externo, que incluye visitas mensuales y las gestiones ante el OPDS de declaraciones juradas de Residuos Especiales y Efluentes Gaseosos. No incluye las tasas a abonar en los organismos correspondientes.",
		],
		items: [
			"Asesoramiento ambiental externo (visitas de 60 min)",
			"Evaluación ambiental",
			"Realización y presentación de DDJJ",
			"Registro de manifiestos y certificados",
			"Gestión del Certificado de Aptitud Ambiental",
			"Control de hojas de seguridad",
			"Asesoramiento externo en ISO 14001:2015",
			"Asistencia y soporte ante entes gubernamentales",
		],
		norms: ["ISO 14001:2015"],
		tabImg: require("assets/img/enviroment.png"),
	},
	{
		slug: "edificio",
		navTitle: "Edificio seguro",
		intro: [
			"La certificación de Edificio Seguro surge de la Disposición 1541/DGDYPC/14, que deroga las Disposiciones 411/DGDYPC/2011, 3314/DGDYPC/2011 y 1875/DGDYPC/2011.",
			"Es obligatoria para inmuebles afectados al Régimen de Propiedad Horizontal (Ley 13.512).",
		],
		items: [
			"Asesoramiento para la prevención y subsanación de los posibles peligros",
			"Tras verificar el cumplimiento de la normativa vigente, el Certificado de Edificio Seguro es suscripto por un profesional habilitado (Lic. en Seguridad e Higiene o Técnico ante el Ministerio de Trabajo)",
		],
		norms: ["Disp. 1541/DGDYPC/14", "Ley 13.512"],
		tabImg: require("assets/img/buildings.png"),
	},
	{
		slug: "capacitaciones",
		navTitle: "Capacitaciones",
		intro: [
			"Contamos con profesionales que brindan diversas capacitaciones para los diferentes ámbitos de trabajo.",
		],
		items: [
			"Uso y conservación de los elementos de protección personal (EPP)",
			"Trabajos en espacios confinados",
			"Seguridad en el manejo de gases comprimidos",
			"Plan de evacuación ante emergencias",
			"Ergonomía según el puesto de trabajo",
		],
		norms: [],
		tabImg: require("assets/img/trainning.png"),
	},
];

export default function ServicePage({ location }) {
	const [activePill, setActivePill] = useState(0);
	let { service } = useParams();
	const classes = useStyles();
	const info = {
		title: "Servicios",
		navItems: services.map((item) => ({
			navTitle: item.navTitle,
			navDesc: (
				<ServiceContent
					intro={item.intro}
					items={item.items}
					norms={item.norms}
					image={item.tabImg}
					alt={item.navTitle}
				/>
			),
			tabImg: item.tabImg,
		})),
		activePill: activePill || 0,
		setActivePill,
	};
	useEffect(() => {
		const index = services.findIndex((item) => item.slug === service);
		setActivePill(index >= 0 ? index : 0);
	}, [location, service]);
	return (
		<div>
			<Header
				color="white"
				sticky
				brand={require("assets/img/safetyHeader.JPG")}
				rightLinks={<HeaderLinks />}
				/>
			<Parallax small image={require("assets/img/header5-nologo.png")} />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div className={classes.container}>
						<SectionPills props={info} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
