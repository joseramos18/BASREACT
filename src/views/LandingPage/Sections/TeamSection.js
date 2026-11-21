import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import civilDefense from "assets/img/civilDefense.jpg";
import lessons from "assets/img/lessons.png";
import simulations from "assets/img/simulations.jpeg";

const useStyles = makeStyles(styles);

const featured = [
  {
    title: "Sistema de autoprotección",
    text:
      "Realizamos la descripción del tipo de actividad que se realiza y de los medios técnicos de protección.",
    image: civilDefense
  },
  {
    title: "Capacitaciones online",
    text:
      "Contamos con profesionales que brindan diversas capacitaciones para los diferentes ámbitos de trabajo.",
    image: lessons
  },
  {
    title: "Simulaciones",
    text:
      "Realizamos simulaciones dinámicas de incendio y de evacuación de personas.",
    image: simulations
  }
];

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <div>
          <span className={classes.eyebrow}>Servicios</span>
          <h2 className={classes.title}>Servicios destacados</h2>
        </div>
        <Link to="/services/construccion" className={classes.moreLink}>
          Ver todos los servicios &rarr;
        </Link>
      </div>
      <div className={classes.grid}>
        {featured.map(item => (
          <div key={item.title} className={classes.card}>
            <img src={item.image} alt={item.title} className={classes.image} />
            <h4 className={classes.cardTitle}>{item.title}</h4>
            <p className={classes.description}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
