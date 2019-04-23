import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import * as React from 'react';

interface IProps {
  text: string;
  completed: boolean;
  onToggleComplete(): void;
  onClickRemove(): void;
}

const TodoItem: React.FunctionComponent<IProps> = ({
  text,
  completed,
  onToggleComplete,
  onClickRemove
}) => {
  return (
    <ListItem className="TodoItem" button={true}>
      <Checkbox tabIndex={-1} checked={completed} onChange={onToggleComplete} />
      <ListItemText primary={text} />
      <ListItemSecondaryAction>
        <Tooltip title="삭제">
          <IconButton aria-label="Delete" onClick={onClickRemove}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
