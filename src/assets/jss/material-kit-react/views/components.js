import { container, navyColor, accentColor } from "assets/jss/material-kit-react.js";

const componentsStyle = theme => ({
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "32px 30px 0px",
    borderRadius: "4px",
    boxShadow: "0 2px 16px rgba(15, 27, 61, 0.12)",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 0px 0px 0px",
    }
  },

  mainRaisedSm: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  heroBand: {
    position: "relative",
    zIndex: "3",
    backgroundColor: navyColor,
    color: "#fff",
    padding: "36px 0"
  },
  heroInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "32px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "20px"
    }
  },
  heroTitle: {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "600",
    lineHeight: "1.25em",
    letterSpacing: "-0.01em",
    margin: "0 0 8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  heroText: {
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: "1.0625rem",
    lineHeight: "1.55em",
    margin: "0",
    maxWidth: "640px"
  },
  heroCta: {
    display: "inline-block",
    backgroundColor: accentColor,
    color: "#fff !important",
    padding: "12px 24px",
    borderRadius: "4px",
    fontSize: "0.9375rem",
    fontWeight: "600",
    "&:hover,&:focus": {
      backgroundColor: "#9a3412",
      color: "#fff"
    },
    whiteSpace: "nowrap"
  },
  textCenter: {
    textAlign: "center"
  }
})

export default componentsStyle;
