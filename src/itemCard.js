import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class DownloadItemCard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title="ArcGIS Deskop 10.4"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="http://www.esri.com/news/arcuser/0111/graphics/accuweather_1_lg.jpg"
            title="ArcGIS Desktop"
          />
          <CardContent>
            <Typography component="p">
              This is ArcGIS Desktop 10.4 installation files, click DOWNLOAD to get the files.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <Button dense color="primary">
              Download
            </Button>
            <div className={classes.flexGrow} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

DownloadItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DownloadItemCard);