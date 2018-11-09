import React, { Component } from 'react'

class Todolist extends Component {
  render() {
    const { text } = this.props
    return <li onClick={this.props.onToggle}>{text}</li>
  }
}

export default Todolist
