import { container, navyColor } from "assets/jss/material-kit-react.js";

const footerStyle = theme => ({
  footer: {
    position: "relative",
    zIndex: "2",
    marginTop: "64px",
    padding: "56px 0 24px",
    backgroundColor: navyColor,
    color: "rgba(255, 255, 255, 0.78)",
    textAlign: "left"
  },
  container,
  columns: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr",
    gap: "40px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: "28px"
    }
  },
  brand: {
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: "0 0 8px"
  },
  heading: {
    color: "#fff",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: "0 0 14px"
  },
  text: {
    fontSize: "0.9375rem",
    lineHeight: "1.6em",
    margin: "0 0 12px"
  },
  list: {
    listStyle: "none",
    margin: "0",
    padding: "0",
    "& li": {
      margin: "0 0 8px"
    }
  },
  link: {
    color: "rgba(255, 255, 255, 0.78)",
    fontSize: "0.9375rem",
    "&:hover,&:focus": {
      color: "#fff",
      textDecoration: "underline"
    }
  },
  social: {
    display: "flex",
    gap: "14px",
    marginTop: "18px"
  },
  socialLink: {
    color: "rgba(255, 255, 255, 0.78)",
    fontSize: "20px",
    "&:hover,&:focus": {
      color: "#fff"
    }
  },
  bottom: {
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.14)",
    fontSize: "0.8125rem",
    color: "rgba(255, 255, 255, 0.6)"
  }
});

export default footerStyle;
