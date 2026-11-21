import { title, primaryColor, navyColor } from "assets/jss/material-kit-react.js";

const teamStyle = theme => ({
  section: {
    padding: "56px 0 64px",
    borderTop: "1px solid #e5e8ef"
  },
  header: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "32px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start"
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
    textDecoration: "none"
  },
  moreLink: {
    fontSize: "0.9375rem",
    fontWeight: "500",
    color: primaryColor,
    "&:hover,&:focus": {
      color: "#1a32a3",
      textDecoration: "underline"
    }
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr"
    }
  },
  card: {
    border: "1px solid #e5e8ef",
    borderRadius: "4px",
    padding: "28px 24px",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "border-color 150ms ease",
    "&:hover": {
      borderColor: primaryColor
    }
  },
  image: {
    display: "block",
    width: "100%",
    height: "120px",
    objectFit: "contain",
    margin: "0 auto 16px"
  },
  cardTitle: {
    color: navyColor,
    fontSize: "1.125rem",
    fontWeight: "600",
    margin: "0 0 8px"
  },
  description: {
    color: "#4b5563",
    fontSize: "0.9375rem",
    lineHeight: "1.6em",
    margin: "0"
  }
});

export default teamStyle;
