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
  title: "Mediciones",
  navItems: [
    {
      navTitle: "Puesta a tierra",
      navDesc: (
        <span
          style={{
            maxWidth: "90vh",
          }}
        >
          <p>
            Medición del valo de Puesta a Tierra (PAT) y verificación de la la
            continuidad de las masas en el ambiente laboral.
          </p>
          <p>
            Certifiación corresponiente para ser presentada ante organismo
            corresponiente (ART, SRT, BOMBEROS, MUNICIPIOS, ETC)
          </p>
        </span>
      ),
      tabImg: require("assets/img/puestaTierra.jpg"),
    },
    {
      navTitle: "Iluminacióm",
      navDesc: (
        <span
          style={{
            maxWidth: "90vh",
          }}
        >
          <p>
            La iluminación en los puestos de trabajo tiene como objeto favorecer
            la percepción visual con el fin de asegurar una correcta ejecución
            de tareas.
            <br></br>
            Damos cumplimiento a la ley 19587, 12 Art. 71 a 84, Res. 84/2012 de
            la SRT. Dec. 351/79 Anexo IV.
          </p>
          <p>
            Al cliente se le entregará un informe con medciones, resultados y
            recomendaciones incumbencias profesionales y certificados Protocolo
            según Res. 84/12
          </p>
        </span>
      ),
      tabImg: require("assets/img/iluminacion.jpg"),
    },
    {
      navTitle: "Ergonomía",
      navDesc: (
        <span
          style={{
            maxWidth: "90vh",
          }}
        >
          <p>
            Nuestro objetivo es lograr el bienestar de los trabajadores en los
            distintos puestos de trabajo y asesorar a las empresas a todo lo
            referente a la Salud Ocupacional.
            <br></br>
            Debemos evitar los problemas en los trabajadores y diminuir los
            problemas de los mismos, es por eso que debemos tener en cuenta la
            normativa vigente y dar cumplimiento a la Res 295/03, en marco de la
            mejora continua, debemos realizar estudios económicos en todos y en
            cada uno de los puestos de trabajo. Ley 19587 Res 886/15 de la ART.
          </p>
          <p>
            -Identifiación de los factores de riesgo.
            <br></br>
            -Evaluación  de los factores de riesgo mediante el método LMC.
            <br></br>
            -Análisis de saturación de oxígeno.
            <br></br>
            -Estudio de fuerza con dinámetro.
            <br></br>
            -Estudio de carga postural con método REBA.
            <br></br>
            -Estimación de la sensación termica global con método FANGER.
            <br></br>
            -Análisis biométrico de los puestos de trabajo.
          </p>
        </span>
      ),
      tabImg: require("assets/img/ergonomia.jpg"),
    },
    {
      navTitle: "Ventilación",
      navDesc: (
        <span
          style={{
            maxWidth: "90vh",
          }}
        >
          <p>
            Teniendo en cuenta la normativa vigente para el Estudio de Ventilación, como la Ley 19587
            y el Dec. 351/79 , Cap 11. Los profesionales capacitados, podrán confeccionar protocolos de
            Ventilación con los resultados obtenidos en la medición y los resultados de los calculos de renovación, 
            certificado de calibración del instrumental utiliado, conclusiones y recomendaciones para poder modificar
            (de ser necesario) las instalaciones. A partit de esto podremos controlar los factores que pueden influir 
            en forma negativa en los trabajadores, como es la reducción de la concentración  de gases, nieblas  o distintos
            tipos de impurezas y el control de temperatura, en el ambiente, producto de las diferentes actividades realizadas.
          </p>
        </span>
      ),
      tabImg: require("assets/img/ventilacion.jpg"),
    },
    {
      navTitle: "Carga de fuego",
      navDesc: (
        <span
          style={{
            maxWidth: "90vh",
          }}
        >
          <p>
            Debido a que se contempla en el DEc. 351/79, Anezo VII, Cap 18 y su objetivo es poder evaludar los diferentes 
            materiales combustibles que se encuentran en el establecimiento determinado.
          </p>
          <p>
            -El objetivo de este informe es conocer la cantidad total de calor capaz de generar la combustión completa de los materiales
            presentes en el sector de incendio, con el fin de determinar la cantidad minima de extintores a colocar.
            <br></br>
            -Se debe realizar y actualizar en forma anual.
          </p>
        </span>
      ),
      tabImg: require("assets/img/fuego.png"),
    },
  ],
};
//console.log(info)
export default function MeasurementPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
