import React, { Component } from "react"

// require traverson and traverson-hal
var traverson = require("traverson")
var JsonHalAdapter = require("traverson-hal")
// register the traverson-hal plug-in for media type 'application/hal+json'
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter)
const url = `http://monkey-app-dev.apps.c3smonkey.ch/`

export default class Customer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
  }

  componentDidMount() {
    //  use Traverson to follow links, as usual
    traverson
      .from(url)
      .jsonHal()
      .follow("self", "get-all-customers")
      .getResource((error, document) => {
        if (error) {
          console.error('No luck :-) - problem to fetch resource ')
        } else {
          console.log('We have followed the path and reached our destination.')
          // console.log(JSON.stringify(document))
        
          // const myObjStr = JSON.stringify(document)
          // console.log(myObjStr)
          // console.log(JSON.parse(myObjStr))
          // console.log(JSON.parse(JSON.stringify(document)))
  
          var result2 = JSON.parse(JSON.stringify(document))

          console.log("Customers lenght " + result2._embedded.customers.length)
           
          this.setState({
            result: JSON.parse(JSON.stringify(document))._embedded.customers
          })
        }
       })
  }

  render() {
    const customers = this.state.result.map((item, i) => (
      <div key={item.customerId}>
        <h2>{ item.firstName }, { item.lastName } </h2>
        <span>{ item.address.city }, { item.address.country }</span>
      </div>
    ));
    return (
      <div id="layout-content" className="layout-content-wrapper">
         <div className="panel-list">{ customers }</div>
      </div>
    )
  }
}
