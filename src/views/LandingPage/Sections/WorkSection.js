import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import whatsapp from "assets/img/whatsapp.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={10} sm={8} md={8}>
          <h2 className={classes.title}>Contactanos</h2>
          <form
            action="https://formsapi.jabwn.com/key/VOD5iffVjghGJCgcQiKZ"
            method="post"
          >
            <GridContainer justify="center">
              <GridItem xs={10} sm={10} md={4}>
                <CustomInput
                  labelText="Nombre"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  name="name"
                />
              </GridItem>
              <GridItem xs={10} sm={10} md={4}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  name="email"
                />
              </GridItem>
              <GridItem xs={10} sm={10} md={4}>
                <CustomInput
                  labelText="Teléfono"
                  id="phone"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  name="phone"
                />
              </GridItem>
              <CustomInput xs={10} sm={10} md={4}
                labelText="Tu mensaje"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
                name="message"
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" type="submit" value="Send">
                  Enviar mensaje
                </Button>
              </GridItem>
            </GridContainer>
          </form>    
        </GridItem>
        <div className={classes.whatsapp}><a href="https://wa.me/5491121652635?text=Me gustaría más información acerca de los servicios que ofrecen"><img src={whatsapp}></img></a> </div>
      </GridContainer>
    </div>
  );
}
