import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from './appBar';
import IntroducePaper from './introduce';
import SearchBar from './search';
import DownloadItemCard from './itemCard';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 0,
    },
});
 
function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar />
            <Grid container spacing={0} justify="center">
                <Grid item xs={12}>
                    <IntroducePaper />
                </Grid>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>
                <Grid item xs={12}>
                    <DownloadItemCard />
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);