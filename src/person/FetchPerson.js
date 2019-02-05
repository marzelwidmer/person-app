import React, { Component } from "react"

// require traverson and traverson-hal
var traverson = require("traverson")
var JsonHalAdapter = require("traverson-hal")
// register the traverson-hal plug-in for media type 'application/hal+json'
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter)
const url = `http://service-latest-ab.apps.c3smonkey.ch/`

 
var person = {
  name: '',
  age: '',
}

export default class FetchPerson extends Component {
  constructor(props) {
    super(props)
    this.state = {
       result: {}
      
    }
  }

  componentDidMount() {
    //  use Traverson to follow links, as usual
    traverson
      .from(url)
      .jsonHal()
      .follow("self", "get-all-persons")
      .getResource((error, document) => {
        // const myObjStr = JSON.stringify(document);
        // console.log(myObjStr);
        // console.log(JSON.parse(myObjStr));
        // console.log(JSON.parse(JSON.stringify(document)))
        
        var result = JSON.parse(JSON.stringify(document))
        person.name = result._embedded.person[0].name
        person.age = result._embedded.person[0].age
        console.log("... " + result._embedded.person.length)
        this.setState({
          result: JSON.parse(JSON.stringify(document))

        })
      })
  }

  render() {
    return (
      
      <div>
        <p>totalPartner</p>
        {this.state.result.totalPartner}
        <p></p>
        <ul>
          <li> {person.name}</li>
          <li> {person.age}</li>
        </ul>
       
 
      </div>
    )
  }
}
