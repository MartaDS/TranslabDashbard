import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps

// @material-ui/core components
import Slide from "@material-ui/core/Slide";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Badge from "components/Badge/Badge.jsx";

// @material-ui/icons
import MonetizationOn from "@material-ui/icons/MonetizationOn";
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Timeline from "@material-ui/icons/Timeline";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Update from "@material-ui/icons/Update";
// core components
import Button from "components/CustomButtons/Button.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';

import avatar from "assets/img/faces/marc.jpg";

import {
  colouredLineChart,
  pieChart
} from "variables/charts";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

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

          <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger" icon>
                <CardIcon color="danger">
                  <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Overall Performance</h4>
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
                <i
                  className={"fas fa-circle " + classes.warning}
                /> Deadhead Stopped{` `}
                <i className={"fas fa-circle " + classes.danger} /> Transit{` `}
                <i className={"fas fa-circle " + classes.success} /> Loading{` `}
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
             <Card>
              <CardHeader color="info" icon>
                <CardIcon color="info">
                  <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  Performance Distribution</h4>
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
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardBody style={{ textAlign: "center" }}>
                <CustomDropdown
                  dropup
                  dropdownHeader="Choose:"
                  buttonText="Transit"
                  buttonProps={{
                    round: true,
                    color: "info"
                  }}
                  dropdownList={[
                    "Stopped",
                    "Re-site",
                    "Loading",
                    {divider: true},
                    "All",
                  ]}
                />
              </CardBody>
            </Card>
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
                  tabButton: "67%",
                  tabIcon: Timeline,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          PERFORMANCE
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        Timeline goes here
                        <br />
                        <br />
                        <br />
                        <Button
                        color="danger"
                        round
                        className={classes.marginRight}
                        onClick={() => this.handleClickOpen("noticeModal")}
                      >
                        X52 APH - John Doe
                    </Button>
                    <Dialog
                        classes={{
                          root: classes.center + " " + classes.modalRoot,
                          paper: classes.modal
                        }}
                        open={this.state.noticeModal}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.handleClose("noticeModal")}
                        aria-labelledby="notice-modal-slide-title"
                        aria-describedby="notice-modal-slide-description"
                      >
                        <DialogTitle
                          id="notice-modal-slide-title"
                          disableTypography
                          className={classes.modalHeader}
                        >
                          <Button
                            justIcon
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="transparent"
                            onClick={() => this.handleClose("noticeModal")}
                          >
                            <Close className={classes.modalClose} />
                          </Button>
                          <h4 className={classes.modalTitle}>X52 APH - John Doe</h4>
                        </DialogTitle>
                        <DialogContent
                          id="notice-modal-slide-description"
                          className={classes.modalBody}
                        >
                        <Card profile>
                        <br />
                          <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img src={avatar} alt="..." />
                            </a>
                          </CardAvatar>
                            <CardBody profile>
                              <NavPills
                              color="warning"
                              alignCenter
                              tabs={[
                                {
                                  tabButton: "45%",
                                  tabContent: (
                                    <Card>
                                      <CardHeader>
                                        <h4 className={classes.cardTitle}>
                                          <Badge color="danger">45 min</Badge>
                                        </h4>
                                        <p className={classes.cardCategory}>
                                          Teeside Doc (3.4095,4.59058)
                                        </p>
                                      </CardHeader>
                                      <CardBody>
                                        13/09/18(12.45) - 13/09/18(01.30)
                                      </CardBody>
                                    </Card>
                                  )
                                },
                                {
                                  tabButton: "92%",
                                  tabContent: (
                                    <Card>
                                      <CardHeader>
                                        <h4 className={classes.cardTitle}>
                                          <Badge color="success">36 hours 5 min</Badge>
                                        </h4>
                                        <p className={classes.cardCategory}>
                                          Teeside Dock (3.4095,4.59058) - Manchester Yard (1.4095,3.59548)
                                        </p>
                                      </CardHeader>
                                      <CardBody>
                                        13/09/18 (12.45) - 15/09/18 (01.45)
                                      </CardBody>
                                    </Card>
                                  )
                                },
                                {
                                  tabButton: "9",
                                  tabContent: (
                                    <Card>
                                      <CardHeader>
                                        <h4 className={classes.cardTitle}>
                                          MONEY WASTED
                                        </h4>
                                        <p className={classes.cardCategory}>
                                          More information here
                                        </p>
                                      </CardHeader>
                                      <CardBody>
                                        Timeline goes here
                                      </CardBody>
                                    </Card>
                                  )
                                }
                              ]}
                              />
                              </CardBody>
                         </Card>
                        </DialogContent>
                        <DialogActions
                          className={
                            classes.modalFooter +
                            " " +
                            classes.modalFooterCenter
                          }
                        >
                          <Button
                            onClick={() => this.handleClose("noticeModal")}
                            color="info"
                            round
                          >
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabButton: "102min",
                  tabIcon: Update,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          TIME WASTED
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        Timeline goes here
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabButton: "10k",
                  tabIcon: MonetizationOn,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          MONEY WASTED
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        Timeline goes here
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </CardBody>
                    </Card>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
                <GridContainer>
    
     
                   
  
        </GridContainer>          
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
