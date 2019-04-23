import { IconButton, InputBase, Paper } from '@material-ui/core';
import { AddCircle as AddCircleIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const TodoInput = ({ value, onChange, onSubmit }) => {
  return (
    <Paper className="TodoInput" elevation={1}>
      <InputBase
        className="TodoInput__input"
        value={value}
        placeholder="새로운 할 일 추가"
        onChange={onChange}
      />
      <IconButton aria-label="Add" onClick={onSubmit}>
        <AddCircleIcon />
      </IconButton>
    </Paper>
  );
};

TodoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TodoInput;
