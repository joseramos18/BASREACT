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
            <p>-Asesoramiento Ambiental Externo (visitas de 60 min)</p>
            <p>-Evaluación ambiental</p>
            <p>-Realización y presentación de DDJJ</p>
            <p>-Registro de manifiestos y certificados</p>
            <p>-Gestión del certificado de Aptitud Ambiental</p>
            <p>-Control de hojas de seguridad</p>
            <p>-Asesoramiento externo en ISO 14001:2015.</p>
            <p>-Asistencia y soporte ante entes gubernamentales</p>
          </span>
        ),
        tabImg: require("assets/img/bg2.jpg"),
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
              Disposición oblitaoria para inmuenbles afectados al Regimen de
              Propiedad Horizontal (Ley 13512)
            </p>
            <p>
              -Asesoramiento para la prevención y subsanado de los posibles
              peligros.
            </p>
            <p>
              -Luego de la verificación del cumplimiento de la normativa vigente
              a la que se encuentran sometidos los edificios sujetos al Régimen
              de Propiedad Horizontal, el Certificado de Edificio Seguro será
              suscripto por un Profesional habilitado (Lic. en Seguridad e
              Higiene o Técnico ante el Ministerio de Trabajo).
            </p>
          </span>
        ),
        tabImg: require("assets/img/bg2.jpg"),
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
            </p>
            <p>-Trabajos en espacios confinados</p>
            <p>-Seguridad en el manejo de gases comprimidos</p>
            <p>-Plan de evacuacín ante emergencias</p>
            <p>-Ergonomía según el puesto de trabajo</p>
          </span>
        ),
        tabImg: require("assets/img/bg2.jpg"),
      },
    ],
  };
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
