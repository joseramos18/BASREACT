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
  'title':'Mediciones',
  'navItems': [
  {
    'navTitle':'Construcción',
    'navDesc': 'Hola',
    tabImg: require("assets/img/bg2.jpg")
  },
  {
    'navTitle':'Industria',
    'navDesc': 'Hola'
  },
  {
    'navTitle':'Medio ambiente',
    'navDesc': 'Hola'
  },
  {
    'navTitle':'Edificio seguro',
    'navDesc': 'Hola'
  },
  {
    'navTitle':'Capacitaciones',
    'navDesc': 'Hola'
  }
]
}
//console.log(info)
export default function MeasurementPage(props) {
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
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <SectionPills props={info}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}