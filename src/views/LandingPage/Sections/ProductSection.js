import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <h2 className={classes.title}>Nosotros</h2>
          <h5 className={classes.description}>
          Somos un equipo que brinda servicio integral de Seguridad, Higiene y Medio Ambiente, 
          teniendo en cuenta una relacion costo-beneficio, para poder adaptarnos de la mejor manera a las necesidades de cada cliente. 
          Sabiendo que es una normativa legal, nuestro principal objetivo es cooperar con las empresas a cumplimentar las exigencias de Seguridad, Higiene y Medio Ambiente a nivel municipal, provincial y nacional. 
          Nuestra consultora está en condiciones de asumir el compromiso de asesorarlo en la gestión de riesgos e incorporación de mejoras laborales y del Medio Ambiente, asi es como crecemos junto a nuestros clientes brindando apoyo en todas las ramas de nuestra Industria, Comercio y Estado
          </h5>
        </GridItem>
      </GridContainer>
{/*       <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div> */}
    </div>
  );
}
