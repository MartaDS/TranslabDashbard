import React from "react";
import PropTypes from "prop-types";
import CustomTimeline from "./CustomTimeline4";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import "react-calendar-timeline/lib/Timeline.css";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Tracking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ background: "white", margin: "10px 0"}}>
      <GridContainer><CustomTimeline/></GridContainer>
      </div>
    );
  }
}
Tracking.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(dashboardStyle)(Tracking);