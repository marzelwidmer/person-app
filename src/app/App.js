import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MainArea from "../layout/MainArea"
import TopNav from "../layout/TopNav"
import "./App.css"
// import logo from "./logo.svg"

class App extends Component {
  render() {
    document.title = "PersonApp"
    return (
      <div>
        <TopNav />
        <MainArea/>
      </div>
    )
  }
}

export default App
