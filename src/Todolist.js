import React, { Component } from 'react'

class Todolist extends Component {
  render() {
    const { text, clickfunction } = this.props
    return <li>{text}</li>
  }
}

export default Todolist
