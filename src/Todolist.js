import React, { Component } from 'react'
import './Todolist.css'

class Todolist extends Component {
  render() {
    const { text, onToggle, done, onDelete } = this.props
    return (
      <li>
        <span onClick={onToggle} className={done ? 'Toggle' : ''}>
          {' '}
          {text}
        </span>
        <button onClick={onDelete}>X</button>
      </li>
    )
  }
}

export default Todolist
