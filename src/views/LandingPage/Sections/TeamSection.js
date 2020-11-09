import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import civilDefense from "assets/img/civilDefense.jpg";
import lessons from "assets/img/lessons.png";
import simulations from "assets/img/simulations.jpeg";
const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Nuestros Servicios Destacados</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={10} sm={10} md={6} className={classes.itemGrid}>
                <img src={civilDefense} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Sistema de autoprotección
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Realizamos descripción del tipo de actividad que se realiza 
                  y de los medios técnicos de protección.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={10} sm={10} md={6} className={classes.itemGrid}>
                <img src={lessons} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Capacitaciones online
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Contamos con profesionales que nos brindan diversas capacitaciones
                  para los diferentes ámbitos de trabajo
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={10} sm={10} md={6} className={classes.itemGrid}>
                <img src={simulations} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Simulaciones
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Realizamos simulaciones dinámicas de incendio y de evacuación de personas
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
