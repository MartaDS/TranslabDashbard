import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import PieChart from "@material-ui/icons/PieChart";
import Timeline from "@material-ui/icons/Timeline";
// import ContentCopy from "@material-ui/icons/ContentCopy";

// import InfoOutline from "@material-ui/icons/InfoOutline";

// core components
import NavPills from "components/NavPills/NavPills.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import Card1 from "components/Card/Card1.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import {
  colouredLineChart,
  pieChart
} from "variables/charts";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false,
      classicModal: false,
      noticeModal: false,
      smallModal: false
    };
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  showNotification(place) {
    if (!this.state[place]) {
      var x = [];
      x[place] = true;
      this.setState(x);
      setTimeout(
        function() {
          x[place] = false;
          this.setState(x);
        }.bind(this),
        6000
      );
    }
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={3}>
            <Card1>
              <CardBody style={{ textAlign: "center", padding: "20px 0px" }}>
                <h5 className={classes.cardTitle}>{`£90530`}</h5>
                <p className={classes.cardCategory}>{`Wasted`}</p>
              </CardBody>
            </Card1>
          </GridItem>
          <GridItem xs={3}>
            <Card1>
              <CardBody style={{ textAlign: "center", padding: "20px 0px" }}>
                <h5 className={classes.cardTitle}>{`113163 min`}</h5>
                <p className={classes.cardCategory}>{`Wasted`}</p>
              </CardBody>
            </Card1>
          </GridItem>
          <GridItem xs={3}>
            <Card1>
              <CardBody style={{ textAlign: "center", padding: "20px 0px" }}>
                <h5 className={classes.cardTitle}>{`22%`}</h5>
                <p className={classes.cardCategory}>{`Performance`}</p>
              </CardBody>
            </Card1>
          </GridItem>
          <GridItem xs={3}>
            <Card1>
              <CardBody style={{ textAlign: "center", padding: "20px 0px" }}>
                <h5 className={classes.cardTitle}>{`9%`}</h5>
                <p className={classes.cardCategory}>{`Time On-Charge`}</p>
              </CardBody>
            </Card1>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.pageSubcategoriesTitle}>
            </h4>
            <br />
            <NavPills
              color="warning"
              alignCenter
              tabs={[
                {
                  tabButton: "Performance",
                  tabIcon: PieChart,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Overall Performance
                        </h4>
                       
                      </CardHeader>
                      <CardBody>
                        <ChartistGraph
                          data={pieChart.data}
                          type="Pie"
                          options={pieChart.options}
                        />
                      </CardBody>
                      <CardFooter stats className={classes.cardFooter}>
                        <i className={"fas fa-circle " + classes.info} /> Deadhead Resiting{` `}
                        <i className={"fas fa-circle " + classes.warning} /> Deadhead Stopped{` `}
                        <i className={"fas fa-circle " + classes.danger} /> Transit{` `}
                        <i className={"fas fa-circle " + classes.success} /> Loading{` `}
                      </CardFooter>
                    </Card>
                  )
                },
                {
                  tabButton: "Distribution",
                  tabIcon: Timeline,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Performance Distribution
                        </h4>
                      </CardHeader>
                      <CardBody>
                        <ChartistGraph
                          data={colouredLineChart.data}
                          type="Line"
                          options={colouredLineChart.options}
                          listener={colouredLineChart.animation}
                        />
                      </CardBody>
                    </Card>
                  )
                },
              ]}
            />
          </GridItem>
        </GridContainer>     
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
