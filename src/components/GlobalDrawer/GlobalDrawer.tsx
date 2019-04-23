import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import { Home as HomeIcon } from '@material-ui/icons';
import * as React from 'react';

interface IProps {
  opened: boolean;
  onToggle(): void;
}

const GlobalDrawer: React.FunctionComponent<IProps> = ({
  opened,
  onToggle
}) => {
  return (
    <SwipeableDrawer
      className="GlobalDrawer"
      open={opened}
      onClose={onToggle}
      onOpen={onToggle}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={onToggle}
        onKeyDown={onToggle}
        style={{ width: 250 }}
      >
        <List>
          <ListItem button={true} key={'메인화면'}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'메인화면'} />
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default GlobalDrawer;
