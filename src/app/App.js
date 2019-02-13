import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
 import TopNav from "../layout/TopNav"
import "./App.css"
import GitHub from "../github/GitHub";
import FetchPerson from "../person/FetchPerson";
import Customer from "../customer/Customer"
import { Clock } from '../timer/Clock';
 
class App extends Component {
  render() {
 
    document.title = "MonkeyApp"
     return (
       <div className="App">
         <TopNav />  
         
         <Customer />
 
         {/* <GitHub username="c3smonkey" className="App-main"> </GitHub> */}
         {/* <FetchPerson /> */}
       </div>
     )
  }
}

export default App

