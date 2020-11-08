import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import SectionPills from "../Components/Sections/SectionPills";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const info = {
  title: "Servicios",
  navItems: [
    {
      navTitle: "Construcción",
      navDesc: (
        <span>
          <p>Ofrecemos confección y presentación ante ART de</p>
          <p>
            -Programa de Seguridad según el tipo de RES. SRT 51/97, 35/98,
            319/99.
          </p>
          <p>-Aviso de obra</p>
          <p>
            -Capacitaiones para la prevención en obra semanal, quincenal y/o
            mensual
          </p>
          <p>-Auditorias en cumplimiento según normativa vigente</p>
          <p>
            Confección de legajos técnicos según exigencia del contratista
            principal o del comitente
          </p>
        </span>
      ),
      tabImg: require("assets/img/bg2.jpg"),
    },
    {
      navTitle: "Industria",
      navDesc: (
        <span>
          <p>
            Brindamos asesoramiento según requerimientos legales establecidos
            por el DEC. 351/79 reglamentario de la Ley 19587/72, DEC. 1338/96 y
            modificaciones por la Ley 24557/95 de Riego de Trabajo.
          </p>
          <p>
            -Auditorias de cumplimiento legal en Seguridad e Higiene Laboral
            acorde al tipo de establecimiento.
          </p>
          <p>
            -Confección de estadisticas sobre indicadores de Seguridad y Salud
            Ocupacional
          </p>
          <p>
            -Cumplimentar las exigencias de la Superintendencia de Riego de
            Trabajo, ART y otros organismos oficiales
          </p>
        </span>
      ),
      tabImg: require("assets/img/bg2.jpg"),
    },
    {
      navTitle: "Medio ambiente",
      navDesc: "Hola",
    },
    {
      navTitle: "Edificio seguro",
      navDesc: "Hola",
    },
    {
      navTitle: "Capacitaciones",
      navDesc: "Hola",
    },
  ],
};
//console.log(info)
export default function ServicePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
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
