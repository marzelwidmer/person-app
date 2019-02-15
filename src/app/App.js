import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TopNav from "../layout/TopNav"
import "./App.css"
import BlueGreen from "../bluegreen/BlueGreen"

 
class App extends Component {
  render() {
    document.title = "MonkeyApp"
    return (
      <div>
        <TopNav />

        <div>
          <h2 class="text-center ">
              <font color="blue">Blue</font>
              <font color="green">Green</font>
              - 
              <font color="blue">A</font>
              <font color="green">B</font>
              - Deployment
          </h2>
      
          <BlueGreen />

        </div>
      </div>
    )
  }
}

export default App
