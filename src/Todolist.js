import React, { Component } from 'react'

class Todolist extends Component {
  render() {
    const { text } = this.props
    return <li>{text}</li>
  }
}

export default Todolist
