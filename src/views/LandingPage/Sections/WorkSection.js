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
      <div className={classes.layout}>
        <div>
          <span className={classes.eyebrow}>Contacto</span>
          <h2 className={classes.title}>Contactanos</h2>
          <p className={classes.description}>
            Contanos qué necesitás y te asesoramos según el tipo de actividad
            de tu empresa.
          </p>
          <ul className={classes.info}>
            <li>
              <strong>Dirección</strong>
              Inclán 3732, Boedo, Buenos Aires
            </li>
            <li>
              <strong>WhatsApp</strong>
              <a
                href="https://wa.me/5491121652635?text=Me gustaría más información acerca de los servicios que ofrecen"
                target="_blank"
                rel="noopener noreferrer"
              >
                +54 9 11 2165-2635
              </a>
            </li>
          </ul>
        </div>
        <form
          action="https://formsapi.jabwn.com/key/VOD5iffVjghGJCgcQiKZ"
          method="post"
        >
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <CustomInput
                labelText="Nombre"
                id="name"
                formControlProps={{ fullWidth: true }}
                name="name"
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <CustomInput
                labelText="Teléfono"
                id="phone"
                formControlProps={{ fullWidth: true }}
                name="phone"
              />
            </GridItem>
            <GridItem xs={12}>
              <CustomInput
                labelText="Email"
                id="email"
                formControlProps={{ fullWidth: true }}
                name="email"
              />
            </GridItem>
            <GridItem xs={12}>
              <CustomInput
                labelText="Tu mensaje"
                id="message"
                formControlProps={{ fullWidth: true }}
                inputProps={{ multiline: true, rows: 5 }}
                name="message"
              />
            </GridItem>
            <GridItem xs={12}>
              <Button color="primary" type="submit" value="Send">
                Enviar mensaje
              </Button>
            </GridItem>
          </GridContainer>
        </form>
      </div>
      <div className={classes.whatsapp}>
        <a href="https://wa.me/5491121652635?text=Me gustaría más información acerca de los servicios que ofrecen">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}
