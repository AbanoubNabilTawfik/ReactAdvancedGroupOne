import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
       this.inputRef=React.createRef();
    }

    componentDidMount()
    {
        this.inputRef.current.focus();
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value)
        console.log(this.inputRef.current)
    }
    
  render() {
    return (
      <div>
            <input type="text"  ref={this.inputRef} />
            <button onClick={this.clickHandler}>Click to get value</button>
      </div>
    )
  }
}

export default RefsDemo
