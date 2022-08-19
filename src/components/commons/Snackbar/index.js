import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

export const TypesSnackbar = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
};

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function SnackbarAlert({
  type, message, openSnackbar, setOpenSnackbar, ...props
}) {
  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

SnackbarAlert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  openSnackbar: PropTypes.bool.isRequired,
  setOpenSnackbar: PropTypes.func.isRequired,
};

SnackbarAlert.defaultProps = {};
