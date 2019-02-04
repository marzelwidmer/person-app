import React, { Component } from "react"

// require traverson and traverson-hal
var traverson = require("traverson")
var JsonHalAdapter = require("traverson-hal")
// register the traverson-hal plug-in for media type 'application/hal+json'
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter)
const url = `http://service-latest-ab.apps.c3smonkey.ch/`

export default class FetchPerson extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    //  use Traverson to follow links, as usual
    traverson
      .from(url)
      .jsonHal()
      .follow("self", "get-all-persons")
      .getResource((error, document) => {           
        console.log(JSON.stringify(document))
        this.setState({
          persons: JSON.stringify(document)
        })
      })


  }

  render() {
    return (
      <div>
        {this.state.persons}
      </div>
    )
  }
}
