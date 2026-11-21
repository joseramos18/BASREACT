import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import ProductSection from "views/LandingPage/Sections/ProductSection.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";
import WorkSection from "views/LandingPage/Sections/WorkSection.js";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
				color="white"
				sticky
				brand={require("assets/img/safetyHeader.JPG")}
				rightLinks={<HeaderLinks />}
				{...rest}
      />
      <Parallax image={require("assets/img/header5.png")} />
      <div className={classes.heroBand}>
        <div className={classes.container}>
          <div className={classes.heroInner}>
            <div>
              <h1 className={classes.heroTitle}>
                Seguridad, Higiene y Medio Ambiente
              </h1>
              <p className={classes.heroText}>
                Asesoramiento integral para industria, construcción y comercio,
                en cumplimiento de la normativa municipal, provincial y
                nacional.
              </p>
            </div>
            <a
              className={classes.heroCta}
              href="https://wa.me/5491121652635?text=Me gustaría más información acerca de los servicios que ofrecen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
