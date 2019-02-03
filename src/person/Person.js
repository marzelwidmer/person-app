import React, { Component } from "react"

// require traverson and traverson-hal
var traverson = require("traverson")
var JsonHalAdapter = require("traverson-hal")
// register the traverson-hal plug-in for media type 'application/hal+json'
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter)
const url = `http://localhost:8080`

export default class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    //  use Traverson to follow links, as usual
    traverson
      .from(url)
      .jsonHal()
      .follow("self", "get-all-persons")
      .getResource(function(error, document) {
        if (error) {
          console.error("No luck :-)")
          throw Error("Network request failed")
        } else {       
          console.log("We have followed the path and reached our destination.")
          console.log(JSON.stringify(document))
        }
      })
  }

  render() {
    if (this.state.requestFailed) return <p>Failed..</p>
    if (!this.state.data) return <p>Loading...</p>
    return <div />
  }
}
