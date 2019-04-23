import './TodoInput.scss';

import { IconButton, InputBase, Paper } from '@material-ui/core';
import { AddCircle as AddCircleIcon } from '@material-ui/icons';
import * as React from 'react';

interface IProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  onSubmit(): void;
}

const TodoInput: React.FunctionComponent<IProps> = ({
  value,
  onChange,
  onSubmit
}) => {
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

export default TodoInput;
