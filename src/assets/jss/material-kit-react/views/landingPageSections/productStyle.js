import { title, primaryColor } from "assets/jss/material-kit-react.js";

const productStyle = theme => ({
  section: {
    padding: "64px 0 56px"
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
    gap: "48px",
    alignItems: "start",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: "16px"
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
    margin: "0",
    textAlign: "left",
    textDecoration: "none"
  },
  description: {
    color: "#374151",
    fontSize: "1rem",
    lineHeight: "1.7em",
    margin: "0 0 16px"
  }
});

export default productStyle;
