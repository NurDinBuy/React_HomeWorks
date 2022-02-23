import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from '../todo-add'

import './app.css';

class App extends React.Component {
  todo_ids = 100

  state = {
    todos: [
      { id: 1, label: 'Drink Coffee', important: true, done: false },
      { id: 2, label: 'Make Awesome App', important: false, done: true },
      { id: 3, label: 'Have a lunch', important: false, done: false }
    ],
    status: 'all',
    search: '',
  }

  onDelete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const new_todos = [...prev, ...next]

      return {todos: new_todos}
    })
  }

  toggleImportant = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)
      const element_old = oldState.todos[idx]
      const element_new = {...element_old, important: !element_old.important}

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const new_todos = [...prev, element_new, ...next]

      return {todos: new_todos}
    })
  }

  toggleDone = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)
      const element_old = oldState.todos[idx]
      const element_new = {...element_old, done: !element_old.done}

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const new_todos = [...prev, element_new, ...next]

      return {todos: new_todos}
    })
  }

  switchStatus = (statusText) => {
    this.setState({
      status: statusText
    })
  }

  onSearch = (searchText) => {
    this.setState({
      search: searchText
    })
  }

  filterByStatus = (todos) => {
    if (this.state.status === 'active') {
      return todos.filter((item) => item.done === false)
    } else if (this.state.status === 'done') {
      return todos.filter((item) => item.done === true)
    } else {
      return todos
    }
  }

  filterBySearchString = (todos) => {
    return todos.filter((item) => item.label.includes(this.state.search))
  }

  onAdd = (todoText) => {
    const newTodo = {
      id: this.todo_ids++,
      label: todoText,
      important: false,
      done: false
    }

    this.setState((oldState) => {
      return {
        todos: [...oldState.todos, newTodo]
      }
    })
  }

  render() {
    const filteredByStatusFilter = this.filterByStatus(this.state.todos)
    const filteredBySearchFilter = this.filterBySearchString(filteredByStatusFilter)

    return (
      <div className="todo-app">
        <AppHeader toDo={125} done={123} />

        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter switchStatus={this.switchStatus} />
        </div>

        <TodoList
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
          onDelete={this.onDelete}
          todos={filteredBySearchFilter}
        />

        <TodoAdd onAdd={this.onAdd} />
      </div>
    );
  }
};

export default App;
