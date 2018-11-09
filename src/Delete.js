import React, { Component } from 'react'
import './Delete.css'

class Delete extends Component {
  render() {
    return (
      <button onClick={onToggle} className={done ? 'Toggle' : ''}>
        {text}
      </button>
    )
  }
}

export default Delete
