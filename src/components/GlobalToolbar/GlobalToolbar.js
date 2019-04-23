import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const GlobalToolbar = ({ onClickToggler }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={onClickToggler}>
          <MenuIcon />
        </IconButton>
        할 일 리스트
      </Toolbar>
    </AppBar>
  );
};

GlobalToolbar.propTypes = {
  onClickToggler: PropTypes.func
};

export default GlobalToolbar;
