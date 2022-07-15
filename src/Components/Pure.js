import React, { Component, PureComponent } from 'react'

export class Pure extends PureComponent {
  render() {
    console.log("Pure component")
    return (
      <div>
          <h1>I'm Pure Component</h1>
          {this.props.name}
      </div>
    )
  }
}

export default Pure
