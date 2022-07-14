import { title } from "assets/jss/material-kit-react.js";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  whatsapp:{
    height: "45px",
    width:"45px",
    '& img':{
      height:"100%"
    },
    "@media (min-width: 768px)": {
      height: "60px",
    width:"60px",
    },
  position: "absolute",
  bottom: "20px",
  right: "20px"
  }
  
};

export default workStyle;
