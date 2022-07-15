import React, { Component } from 'react'

 class Regular extends Component {
  render() {
    console.log("Im regular")
    return (
      <div>
         <h1>Regular Component</h1>
         {this.props.name}
      </div>
    )
  }
}

export default Regular
