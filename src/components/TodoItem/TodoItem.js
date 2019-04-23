import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const TodoItem = ({ text, completed, onToggleComplete, onClickRemove }) => {
  return (
    <ListItem className="TodoItem" button>
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

TodoItem.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  onToggleComplete: PropTypes.func,
  onClickRemove: PropTypes.func
};

export default TodoItem;
