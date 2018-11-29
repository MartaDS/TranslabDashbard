import React from "react";
import PropTypes from "prop-types";
import CustomTimeline from "./CustomTimeline";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import "react-calendar-timeline/lib/Timeline.css";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Tracking extends React.Component {

  render() {
    return (

      <div style={{ background: "white", margin: "10px 0"}}>
      <GridContainer><GridItem xs={12} sm={12} md={12}>
                        <h4 style={{ textAlign: "center"}}>
                          MLS Overall Performance:
                        </h4></GridItem>
                        <CustomTimeline/></GridContainer>
      </div>
    );
  }
}
Tracking.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(dashboardStyle)(Tracking);