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
          <Alert color="primary"><BlueGreen /></Alert>
          <Alert color="success"><BlueGreen /></Alert>
          <Alert color="primary"><BlueGreen /></Alert>

         
        </div>

        {/* <Customer /> */}

        {/* <GitHub username="c3smonkey" className="App-main"> </GitHub> */}
        {/* <FetchPerson /> */}
      </div>
    )
  }
}

export default App
