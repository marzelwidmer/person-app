import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
 import TopNav from "../layout/TopNav"
import "./App.css"
import GitHub from "../github/GitHub";
import Person from "../person/Person";

class App extends Component {
  render() {
     return (
       <div className="App">
         <TopNav />
         {/* <GitHub username="c3smonkey" className="App-main"> </GitHub> */}
         <Person></Person>
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
