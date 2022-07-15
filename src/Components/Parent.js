import React, { Component } from 'react'
import Memo from './Memo'
import Pure from './Pure'
import Regular from './Regular'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Abanoub'
      }
    }

    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name:'Ahmed'
            })
        },2000)
    }
    
  render() {
    console.log("Im parent")
    return (
      <div> 
           Parent Component
           <Regular name={this.state.name}/>
           <Pure name={this.state.name}/>
           {/* <Memo name={this.state.name}/> */}
      </div>
    )
  }
}

export default Parent
