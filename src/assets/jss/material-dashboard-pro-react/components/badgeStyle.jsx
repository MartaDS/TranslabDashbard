// ##############################
// // // Badge component styles
// #############################

import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor
} from "assets/jss/material-dashboard-pro-react.jsx";

const badgeStyle = {
  badge: {
    borderRadius: "1px",
    padding: "10px 20px",
    margin: "1px",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: primaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  rose: {
    backgroundColor: roseColor
  },
  gray: {
    backgroundColor: grayColor
  }
};

export default badgeStyle;
