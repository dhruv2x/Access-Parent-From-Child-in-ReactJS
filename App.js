import React, { Component } from "react";
import ChildComponent from "./component/ChildComponent";
import ParentComponent from "./component/ParentComponent";
class App extends Component {
  render() {
    return (
      //I have used boostrap for heading
      <div className="mx-auto" style={{ width: "700px" }}>
        <div class="card">
          <div class="card-body">
            Below is Just a example of Methods as props in React JS :)
          </div>
        </div>
        <ParentComponent />
      </div>
    );
  }
}

export default App;
