import { title, primaryColor, navyColor } from "assets/jss/material-kit-react.js";

const workStyle = theme => ({
  section: {
    padding: "56px 0 72px",
    borderTop: "1px solid #e5e8ef"
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: "48px",
    alignItems: "start",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: "24px"
    }
  },
  eyebrow: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: primaryColor,
    marginBottom: "8px"
  },
  title: {
    ...title,
    fontSize: "1.75rem",
    lineHeight: "1.3em",
    margin: "0 0 12px",
    textDecoration: "none"
  },
  description: {
    color: "#374151",
    fontSize: "1rem",
    lineHeight: "1.7em",
    margin: "0 0 24px"
  },
  info: {
    listStyle: "none",
    margin: "0",
    padding: "0",
    "& li": {
      padding: "12px 0",
      borderTop: "1px solid #eef0f4",
      color: "#374151",
      fontSize: "1rem"
    },
    "& strong": {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: navyColor,
      marginBottom: "2px"
    },
    "& a": {
      color: primaryColor
    }
  },
  whatsapp: {
    height: "45px",
    width: "45px",
    "& img": {
      height: "100%"
    },
    "@media (min-width: 768px)": {
      height: "60px",
      width: "60px"
    },
    position: "absolute",
    bottom: "20px",
    right: "20px"
  }
});

export default workStyle;
