import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Paper className={classes.paper}>{`£7K`}<p style={{fontWeight: "bold"}}>{`Money`}<br />{`Wasted`}</p></Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>{`148h`}<br /><p style={{fontWeight: "bold"}}>{`Time`}<br />{`Wasted`}</p></Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>{`22%`}<br /><p style={{fontWeight: "bold"}}>{`Overall`}<br />{`Perform.`}</p></Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>{`29%`}<br /><p style={{fontWeight: "bold"}}>{`On`}<br />{`Charge`}</p></Paper>
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

function NestedGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={14}>
          <FormRow classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);
