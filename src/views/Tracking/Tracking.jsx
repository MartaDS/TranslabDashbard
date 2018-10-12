import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// react plugin for creating vector maps

// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slide from "@material-ui/core/Slide";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Badge from "components/Badge/Badge.jsx";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import InfoOutline from "@material-ui/icons/InfoOutline";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import avatar from "assets/img/faces/marc.jpg";


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
      noticeModal1: false,
      noticeModal2: false,
      noticeModal3: false,
      noticeModal4: false,
      noticeModal5: false
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
            <CustomTabs
              title="Period:"
              headerColor="danger"
              tabs={[
                {
                  tabName: "1D",
                  tabContent: (
                        <div>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            Filter data further
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={this.state.simpleSelect}
                            onChange={this.handleSimple}
                            inputProps={{
                              name: "simpleSelect",
                              id: "simple-select"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Filter data further
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="2"
                            >
                              Transit
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="3"
                            >
                              Stopped
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="4"
                            >
                              Re-site
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="5"
                            >
                              Loading
                            </MenuItem>
                          </Select>
                        </FormControl>
                        <Button
                        className={classes.marginRight}
                        onClick={() => this.handleClickOpen("noticeModal5")}
                        > JXS 345
                        </Button> =>>
                        <Button
                        color="danger"
                        className={classes.marginRight}
                        onClick={() => this.handleClickOpen("noticeModal1")}
                        > 45 min
                        </Button>
                        <Button
                        color="warning"
                        className={classes.marginRight}
                        onClick={() => this.handleClickOpen("noticeModal2")}
                        > ...1h...
                        </Button>
                        <Button
                        color="success"
                        className={classes.marginRight}
                        onClick={() => this.handleClickOpen("noticeModal3")}
                        >    .......6h 35min.......
                        </Button>
                        <Button
                        color="info"
                        className={classes.marginRight}
                        onClick={() => this.handleClickOpen("noticeModal4")}
                        >  ....2h....
                        </Button>
                        </div>
                  )
                },
                {
                  tabName: "1W",
                  tabContent: (
                    <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            Filter data further
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={this.state.simpleSelect}
                            onChange={this.handleSimple}
                            inputProps={{
                              name: "simpleSelect",
                              id: "simple-select"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Filter data further
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="2"
                            >
                              Transit
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="3"
                            >
                              Stopped
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="4"
                            >
                              Re-site
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="5"
                            >
                              Loading
                            </MenuItem>
                          </Select>
                        </FormControl>
                  )
                },
                {
                  tabName: "1M",
                  tabContent: (
                    <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            Filter data further
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={this.state.simpleSelect}
                            onChange={this.handleSimple}
                            inputProps={{
                              name: "simpleSelect",
                              id: "simple-select"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Filter data further
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="2"
                            >
                              Transit
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="3"
                            >
                              Stopped
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="4"
                            >
                              Re-site
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="5"
                            >
                              Loading
                            </MenuItem>
                          </Select>
                        </FormControl>
                  )
                },
                {
                  tabName: "3M",
                  tabContent: (
                    <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            Filter data further
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={this.state.simpleSelect}
                            onChange={this.handleSimple}
                            inputProps={{
                              name: "simpleSelect",
                              id: "simple-select"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Filter data further
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="2"
                            >
                              Transit
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="3"
                            >
                              Stopped
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="4"
                            >
                              Re-site
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="5"
                            >
                              Loading
                            </MenuItem>
                          </Select>
                        </FormControl>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
                    <Dialog
                        classes={{
                          root: classes.center + " " + classes.modalRoot,
                          paper: classes.modal
                        }}
                        open={this.state.noticeModal1}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.handleClose("noticeModal1")}
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
                            onClick={() => this.handleClose("noticeModal1")}
                          >
                            <Close className={classes.modalClose} />
                          </Button>
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
                                <CardHeader>
                                <h4 className={classes.cardTitle}>
                                  X52 APH - STOPPED
                                </h4>
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
                              </CardBody>
                            </Card>
                        </DialogContent>
                        
                    </Dialog>
                    <Dialog
                        classes={{
                          root: classes.center + " " + classes.modalRoot,
                          paper: classes.modal
                        }}
                        open={this.state.noticeModal2}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.handleClose("noticeModal2")}
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
                            onClick={() => this.handleClose("noticeModal2")}
                          >
                            <Close className={classes.modalClose} />
                          </Button>
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
                                <CardHeader>
                                <h4 className={classes.cardTitle}>
                                  X52 APH - RE-SITE
                                </h4>
                                <h4 className={classes.cardTitle}>
                                  <Badge color="warning">1 h</Badge>
                                </h4>
                                <p className={classes.cardCategory}>
                                  Teeside Doc (3.4095,4.59058) => Manchester Yard (1.4095,3.59548)
                                </p>
                                </CardHeader>
                                <CardBody>
                               
                                </CardBody>
                              </CardBody>
                            </Card>
                        </DialogContent>
                        
                    </Dialog>
                    <Dialog
                        classes={{
                          root: classes.center + " " + classes.modalRoot,
                          paper: classes.modal
                        }}
                        open={this.state.noticeModal3}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.handleClose("noticeModal3")}
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
                            onClick={() => this.handleClose("noticeModal3")}
                          >
                            <Close className={classes.modalClose} />
                          </Button>
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
                                <CardHeader>
                                <h4 className={classes.cardTitle}>
                                  X52 APH - TRANSIT
                                </h4>
                                <h4 className={classes.cardTitle}>
                                  <Badge color="success">6 h 35 min</Badge>
                                </h4>
                                <p className={classes.cardCategory}>
                                  Teeside Doc (3.4095,4.59058) => Manchester Yard (1.4095,3.59548)
                                </p>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                              </CardBody>
                            </Card>
                        </DialogContent>
                        
                    </Dialog>
                    <Dialog
                        classes={{
                          root: classes.center + " " + classes.modalRoot,
                          paper: classes.modal
                        }}
                        open={this.state.noticeModal4}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.handleClose("noticeModal4")}
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
                            onClick={() => this.handleClose("noticeModal4")}
                          >
                            <Close className={classes.modalClose} />
                          </Button>
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
                              <CardHeader>
                                <h4 className={classes.cardTitle}>
                                  X52 APH - LOADING
                                </h4>
                                <h4 className={classes.cardTitle}>
                                  <Badge color="info">45 min</Badge>
                                </h4>
                                <p className={classes.cardCategory}>
                                  Teeside Doc (3.4095,4.59058)
                                </p>
                                </CardHeader>
                                <CardBody>
                                  13/09/18(12.45) - 13/09/18(01.30)
                                </CardBody>
                              </CardBody>
                          </Card>
                        </DialogContent>
                        <Dialog
                        classes={{
                          root: classes.center + " " + classes.modalRoot,
                          paper: classes.modal
                        }}
                        open={this.state.noticeModal5}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.handleClose("noticeModal5")}
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
                            onClick={() => this.handleClose("noticeModal5")}
                          >
                            <Close className={classes.modalClose} />
                          </Button>
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
                                <CardHeader>
                                <h4 className={classes.cardTitle}>
                                  John Doe's Overall Performance
                                </h4>
                                <h4 className={classes.cardTitle}>
                                  <Badge color="info">3961 min waste</Badge>
                                  <Badge color="info">£3169 waste</Badge>
                                  <Badge color="info">9% time on charge</Badge>
                                  <Badge color="info">19% performance</Badge>
                                </h4>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                              </CardBody>
                            </Card>
                        </DialogContent>
                    </Dialog>
                        
                    </Dialog>    
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
