import React, { Component } from 'react'
import './Todolist.css'

class Todolist extends Component {
  render() {
    const { text, onToggle, done } = this.props
    return (
      <li onClick={onToggle} className={done ? 'Toggle' : ''}>
        {text}
      </li>
    )
  }
}

export default Todolist
