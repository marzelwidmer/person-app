import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MainArea from "../layout/MainArea"
import TopNav from "../layout/TopNav"
import "./App.css"
import GitHub from "../github/GitHub";
// import logo from "./logo.svg"

class App extends Component {
  render() {
     return (
       <div>
         <GitHub username="c3smonkey"> </GitHub>
       </div>
     )
  }
}

export default App
// render() {
//   document.title = "PersonApp"
//   return (
//     <div>
//       {/* <TopNav />
//       <MainArea/> */}
//     </div>
//   )
// }
