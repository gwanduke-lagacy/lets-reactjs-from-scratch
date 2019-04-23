import './TodoInput.scss';

import { IconButton, InputBase, Paper } from '@material-ui/core';
import { AddCircle as AddCircleIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const TodoInput = ({ value, onChange, onSubmit }) => {
  return (
    <form
      className="TodoInput"
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Paper className="TodoInput__paper" elevation={1}>
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
    </form>
  );
};

TodoInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TodoInput;
