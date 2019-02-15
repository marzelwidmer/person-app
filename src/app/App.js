import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TopNav from "../layout/TopNav"
import "./App.css"
import BlueGreen from "../bluegreen/BlueGreen"
import AbDeployment from '../ab-deployment/AbDeployment';

 
class App extends Component {
  render() {
    document.title = "MonkeyApp"
    return (
      <div>
        <TopNav />

        <div>
          
          <BlueGreen />
          <AbDeployment />

        </div>
      </div>
    )
  }
}

export default App
