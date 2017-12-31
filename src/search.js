import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input'
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
    },
    textFieldRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    textFieldInput: {
      borderRadius: 0,
      background: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
      width: 'calc(100% - 24px)',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
    //   '&:focus': {
    //     borderColor: '#80bdff',
    //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    //   },
    },
    textFieldFormLabel: {
      fontSize: 18,
    },
  });

function SearchBar(props) {
    const { classes } = props;
    return (
        <div>
            <TextField
                defaultValue=""
                InputProps={{
                    disableUnderline: true,
                    classes: {
                        root: classes.textFieldRoot,
                        input: classes.textFieldInput,
                    },
                }}
                InputLabelProps={{
                    shrink: true,
                    className: classes.textFieldFormLabel,
                }}
            />
        </div>
    );
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);