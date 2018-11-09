import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Todolist from './Todolist'

class App extends Component {
  state = {
    todos: [
      { text: 'Geschenke', done: false },
      { text: 'Deko', done: false },
      { text: 'Silvester', done: false }
    ]
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
    }
  }

  render() {
    return (
      <div className="App">
        <Input keyupfunction={this.addTodoArray} />
        <div>
          {this.state.todos.map(todo => (
            <Todolist key={todo.text} text={todo.text} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
