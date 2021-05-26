import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills(props) {
  const classes = useStyles();
  const { ...params } = props;
 const getArray = (props) => {
  var array = []
   props.navItems.map((item) => array.push({
    tabButton: item.navTitle,
    tabContent: item.navDesc,
    tabImg: item.tabImg
   }))
   return array
 }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{params.props.title}</h2>
        </GridItem>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                tabs= { getArray(params.props)}
                activePill={params.props.activePill}
                setActivePill={params.props.setActivePill}
                isMeasurement={params.props.isMeasurement}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
