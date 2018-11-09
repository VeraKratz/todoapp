import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder=" Add todo here"
        onKeyUp={event => {
          this.props.keyupfunction(event)
        }}
      />
    )
  }
}

export default Input
