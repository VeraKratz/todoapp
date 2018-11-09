import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todolist from './Todolist'

class App extends Component {
  state = {
    todos: []
  }

  toggleDone = index => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]
    this.setState({
      todos: newTodos
    })
  }

  toDelete = index => {
    const { todos } = this.state
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]
    this.setState({
      todos: newTodos
    })
  }

  addTodoArray = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, done: false },
        ...this.state.todos
      ]
      this.setState({
        todos: newEntry
      })
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="App">
        <Input keyupfunction={this.addTodoArray} />
        <div>
          {this.state.todos.map((todo, index) => (
            <Todolist
              key={todo.text}
              text={todo.text}
              onToggle={() => {
                this.toggleDone(index)
              }}
              done={todo.done}
              onDelete={() => {
                this.toDelete(index)
              }}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
