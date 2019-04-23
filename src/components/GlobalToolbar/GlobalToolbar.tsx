import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import * as React from 'react';

interface IProps {
  onClickToggler(): void;
}

const GlobalToolbar: React.FunctionComponent<IProps> = ({ onClickToggler }) => {
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

export default GlobalToolbar;
