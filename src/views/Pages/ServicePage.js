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

//console.log(info)
export default function ServicePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const info = {
    title: "Servicios",
    navItems: [
      {
        navTitle: "Construcción",
        navDesc: (
          <span
            style={{
              maxWidth: "90vh",
            }}
          >
            <p>Ofrecemos confección y presentación ante ART de</p>
            <p>
              -Programa de Seguridad según el tipo de RES. SRT 51/97, 35/98,
              319/99.
              <br></br>
              -Aviso de obra
              <br></br>
              -Capacitaiones para la prevención en obra semanal, quincenal y/o
              mensual
              <br></br>
              -Auditorias en cumplimiento según normativa vigente
              <br></br>
              -Confección de legajos técnicos según exigencia del contratista
              principal o del comitente
            </p>
          </span>
        ),
        tabImg: require("assets/img/construction.png"),
      },
      {
        navTitle: "Industria",
        navDesc: (
          <span
            style={{
              maxWidth: "90vh",
            }}
          >
            <p>
              Brindamos asesoramiento según requerimientos legales establecidos
              por el DEC. 351/79 reglamentario de la Ley 19587/72, DEC. 1338/96
              y modificaciones por la Ley 24557/95 de Riego de Trabajo.
            </p>
            <p>
              -Auditorias de cumplimiento legal en Seguridad e Higiene Laboral
              acorde al tipo de establecimiento.
              <br></br>
              -Confección de estadisticas sobre indicadores de Seguridad y Salud
              Ocupacional
              <br></br>
              -Cumplimentar las exigencias de la Superintendencia de Riego de
              Trabajo, ART y otros organismos oficiales
            </p>
          </span>
        ),
        tabImg: require("assets/img/industry.png"),
      },
      {
        navTitle: "Medio ambiente",
        navDesc: (
          <span
            style={{
              maxWidth: "90vh",
            }}
          >
            <p>
              Ofrecemos un serivico integral de Medio Ambiente externo, que
              incluye visitas mensuales y las gestiones antes OPDS de
              declaraciones juradas de Residuos Especiales y Efluentes Gaseosos.
              (No incluye tasas a abonar en los organismos correspondientes).
            </p>
            <p>
            -Asesoramiento Ambiental Externo (visitas de 60 min)
            <br></br>
            -Evaluación ambiental
            <br></br>
            -Realización y presentación de DDJJ
            <br></br>
            -Registro de manifiestos y certificados
            <br></br>
            -Gestión del certificado de Aptitud Ambiental
            <br></br>
            -Control de hojas de seguridad
            <br></br>
            -Asesoramiento externo en ISO 14001:2015.
            <br></br>
            -Asistencia y soporte ante entes gubernamentales.           
            </p>
          </span>
        ),
        tabImg: require("assets/img/enviroment.png"),
      },
      {
        navTitle: "Edificio seguro",
        navDesc: (
          <span
            style={{
              maxWidth: "90vh",
            }}
          >
            <p>
              La certificación de Edificio seguro surge de la Disposición
              1541/DGDYPC/14.
            </p>
            <p>
              Derogación de Disposición 411/DGDYPC/2011, 3314/DGDYPC/2011 y
              1875/DGDYPC/2011.
            </p>
            <p>
              Disposición obligatoria para inmuenbles afectados al Regimen de
              Propiedad Horizontal (Ley 13512)
            </p>
            <p>
              -Asesoramiento para la prevención y subsanado de los posibles
              peligros.
              <br></br>
              -Luego de la verificación del cumplimiento de la normativa vigente
              a la que se encuentran sometidos los edificios sujetos al Régimen
              de Propiedad Horizontal, el Certificado de Edificio Seguro será
              suscripto por un Profesional habilitado (Lic. en Seguridad e
              Higiene o Técnico ante el Ministerio de Trabajo).
            </p>
          </span>
        ),
        tabImg: require("assets/img/buildings.png"),
      },
      {
        navTitle: "Capacitaciones",
        navDesc: (
          <span
            style={{
              maxWidth: "90vh",
            }}
          >
            <p>
              Contamos con profesionales que nos brindan diversas capacitaciones
              para los diferentes ámbitos de trabajo
            </p>
            <p>
              -Uso y conversación de los elementos de protección personal (EPP)
              <br></br>
              -Trabajos en espacios confinados
              <br></br>
              -Seguridad en el manejo de gases comprimidos
              <br></br>
              -Plan de evacuacín ante emergencias
              <br></br>
              -Ergonomía según el puesto de trabajo
              <br></br>
              <br></br>
            </p>
          </span>
        ),
        tabImg: require("assets/img/trainning.png"),
      },
    ],
  };
  return (
    <div>
      <Header
        color="transparent"
        brand={require("assets/img/safetyHeader.JPG")}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/header5.png")} />
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
