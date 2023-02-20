import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }

      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        //Here we dont have to change 
        //we just have to create alert
        alert('Hello'+this.state.parentName)
        //We also use ES6 Feature
        //alert(`Hello ${this.state.parentName}`)
    }
    //cc snippet
    render() { 
        return (
            <div>
            <ChildComponent greetHandler={this.greetParent}/>
            </div> 
        );
    }
}
 
export default ParentComponent;