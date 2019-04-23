import './App.scss';

import { List } from '@material-ui/core';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { axios } from './api';
import GlobalDrawer from './components/GlobalDrawer/GlobalDrawer';
import GlobalToolbar from './components/GlobalToolbar/GlobalToolbar';
import TodoInput from './components/TodoInput/TodoInput';
import TodoItem from './components/TodoItem/TodoItem';

class App extends Component {
  state = {
    drawerOpened: false,
    inputText: '',
    todos: []
  };

  async componentDidMount() {
    const res = await axios({
      url: 'todos'
    });
    const todos = res.data;

    this.setState({
      todos
    });
  }

  render() {
    const { drawerOpened, inputText, todos } = this.state;

    return (
      <div className="App">
        <GlobalToolbar onClickToggler={this.onToggleDrawer} />
        <GlobalDrawer opened={drawerOpened} onToggle={this.onToggleDrawer} />
        <List>
          <TodoInput
            value={inputText}
            onChange={this.onChangeInputText}
            onSubmit={this.onAddTodo}
          />
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              text={todo.body}
              completed={todo.completed}
              onToggleComplete={() => this.onToggleComplete(todo.id)}
              onClickRemove={() => this.onRemoveTodo(todo.id)}
            />
          ))}
        </List>
      </div>
    );
  }

  onToggleComplete = todoId => {
    // TODO: 투두 토글러 구현
    console.log('onToggleComplete');
  };

  onAddTodo = () => {
    // TODO: 투두 추가 기능 구현
    console.log('onAddTodo');
  };

  onRemoveTodo = todoId => {
    // TODO: 투두 삭제 기능 구현
    console.log('onRemoveTodo', todoId);
  };

  onChangeInputText = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  onToggleDrawer = () => {
    const { drawerOpened } = this.state;

    this.setState({
      drawerOpened: !drawerOpened
    });
  };
}

export default hot(module)(App);
