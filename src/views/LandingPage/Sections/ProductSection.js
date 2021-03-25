import React, {useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MetaTags from 'react-meta-tags';

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
/*   useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    document.body.appendChild(script);

  }, []); */
  const classes = useStyles();
  return (
    <React.Fragment>
{/*     <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta name="google-signin-client_id" content="546440345785-v2o937i599gdtobqb2rsc1k3qfrm4n7e.apps.googleusercontent.com"></meta>
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
    </MetaTags>
    <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
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
      </div>
      </React.Fragment>  );
}
