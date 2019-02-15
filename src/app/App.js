import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TopNav from "../layout/TopNav"
import "./App.css"
import GitHub from "../github/GitHub"
import Customer from "../customer/Customer"
import { Clock } from "../timer/Clock"
import BlueGreen from "../bluegreen/BlueGreen"

import { Alert } from "reactstrap"

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
          <Alert color="primary" className="code"><BlueGreen/></Alert>
          <Alert color="success" className="code"><BlueGreen /></Alert>
        </div>

        {/* <Customer /> */}

        {/* <GitHub username="c3smonkey" className="App-main"> </GitHub> */}
        {/* <FetchPerson /> */}
      </div>
    )
  }
}

export default App
