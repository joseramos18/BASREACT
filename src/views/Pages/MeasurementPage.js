import React, { useState } from "react";
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

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const measurements = [
	{
		navTitle: "Puesta a tierra",
		intro: [
			"Medición del valor de Puesta a Tierra (PAT) y verificación de la continuidad de las masas en el ambiente laboral.",
			"Entregamos la certificación correspondiente para presentar ante el organismo que corresponda (ART, SRT, Bomberos, municipios, etc.).",
		],
		items: [],
		norms: ["Res. SRT 900/15"],
		tabImg: require("assets/img/puestaTierra.jpg"),
	},
	{
		navTitle: "Iluminación",
		intro: [
			"La iluminación en los puestos de trabajo tiene como objeto favorecer la percepción visual para asegurar la correcta ejecución de las tareas.",
			"Damos cumplimiento a la Ley 19.587, al Dec. 351/79 (Cap. 12, Art. 71 a 84, y Anexo IV) y a la Res. SRT 84/2012.",
			"Entregamos al cliente un informe con mediciones, resultados y recomendaciones, junto con las incumbencias profesionales, los certificados y el protocolo según Res. 84/12.",
		],
		items: [],
		norms: ["Res. SRT 84/12", "Dec. 351/79 Anexo IV", "Ley 19.587"],
		tabImg: require("assets/img/iluminacion.jpg"),
	},
	{
		navTitle: "Ergonomía",
		intro: [
			"Nuestro objetivo es lograr el bienestar de los trabajadores en los distintos puestos de trabajo y asesorar a las empresas en todo lo referente a la Salud Ocupacional.",
			"Para prevenir y reducir los problemas de salud de los trabajadores damos cumplimiento a la Res. 295/03 y a la Res. 886/15 (Ley 19.587), y realizamos estudios ergonómicos en cada puesto de trabajo, en el marco de la mejora continua.",
		],
		items: [
			"Identificación de los factores de riesgo",
			"Evaluación de los factores de riesgo mediante el método LMC",
			"Análisis de saturación de oxígeno",
			"Estudio de fuerza con dinamómetro",
			"Estudio de carga postural con método REBA",
			"Estimación de la sensación térmica global con método FANGER",
			"Análisis biométrico de los puestos de trabajo",
		],
		norms: ["Res. 295/03", "Res. 886/15"],
		tabImg: require("assets/img/ergonomia.jpg"),
	},
	{
		navTitle: "Ventilación",
		intro: [
			"Teniendo en cuenta la normativa vigente para el Estudio de Ventilación (Ley 19.587 y Dec. 351/79, Cap. 11), los profesionales capacitados confeccionan protocolos con los resultados de la medición y de los cálculos de renovación, el certificado de calibración del instrumental utilizado, conclusiones y recomendaciones para modificar las instalaciones, de ser necesario.",
			"Así se controlan los factores que pueden influir negativamente en los trabajadores, como la concentración de gases, nieblas o impurezas y la temperatura del ambiente, producto de las diferentes actividades realizadas.",
		],
		items: [],
		norms: ["Ley 19.587", "Dec. 351/79 Cap. 11"],
		tabImg: require("assets/img/ventilacion.jpg"),
	},
	{
		navTitle: "Carga de fuego",
		intro: [
			"Contemplada en el Dec. 351/79, Anexo VII, Cap. 18, su objetivo es evaluar los distintos materiales combustibles presentes en el establecimiento.",
		],
		items: [
			"Conocer la cantidad total de calor capaz de generar la combustión completa de los materiales presentes en el sector de incendio, para determinar la cantidad mínima de extintores a colocar",
			"Se debe realizar y actualizar en forma anual",
		],
		norms: ["Dec. 351/79 Anexo VII"],
		tabImg: require("assets/img/fuego.png"),
	},
];

export default function MeasurementPage(props) {
	const classes = useStyles();
	const [activePill, setActivePill] = useState(0);
	const { ...rest } = props;
	const info = {
		title: "Mediciones",
		navItems: measurements.map((item) => ({
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
		activePill,
		setActivePill,
		isMeasurement: true,
	};
	return (
		<div>
			<Header
				color="white"
				sticky
				brand={require("assets/img/safetyHeader.JPG")}
				rightLinks={<HeaderLinks />}
				{...rest}
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
