import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.layout}>
        <div>
          <span className={classes.eyebrow}>Quiénes somos</span>
          <h2 className={classes.title}>
            Servicio integral de Seguridad, Higiene y Medio Ambiente
          </h2>
        </div>
        <div>
          <p className={classes.description}>
            Somos un equipo que brinda un servicio integral de Seguridad,
            Higiene y Medio Ambiente, con una relación costo-beneficio que nos
            permite adaptarnos a las necesidades de cada cliente.
          </p>
          <p className={classes.description}>
            Sabemos que se trata de una normativa legal. Por eso nuestro
            principal objetivo es acompañar a las empresas en el cumplimiento de
            las exigencias de Seguridad, Higiene y Medio Ambiente a nivel
            municipal, provincial y nacional.
          </p>
          <p className={classes.description}>
            Estamos en condiciones de asesorarlo en la gestión de riesgos y en
            la incorporación de mejoras laborales y del medio ambiente. Así
            crecemos junto a nuestros clientes, brindando apoyo en todas las
            ramas de la industria, el comercio y el Estado.
          </p>
        </div>
      </div>
    </div>
  );
}
