import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function IntroducePaper(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.paper} elevation={4}>
        <Typography type="headline" component="h1" align="center">
          A File Share and Download Repo
        </Typography>
        <Typography component="p" align="center">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}

IntroducePaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroducePaper);