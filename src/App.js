import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todolist from './Todolist'
import Counter from './Counter'

class App extends Component {
  state = {
    todos: []
  }

  countStuff() {
    return this.state.todos.filter(item => item.done).length
  }

  toDelete = index => {
    const { todos } = this.state
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]
    this.setState({
      todos: newTodos
    })
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
        <Counter num={this.countStuff()} />
        <Input keyupfunction={this.addTodoArray} />
        <ul>
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
        </ul>
      </div>
    )
  }
}

export default App
