import React, { Component } from "react"

 const urlIndexApi = `http://localhost:8080`
//  const urlIndexApi = `http://ab-route-ab.apps.c3smonkey.ch/`

export default class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch(urlIndexApi)
      .then(response => {
          if(!response.ok){
              throw Error("Network request failed")
          }
          return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          personIndexData: d
        })
      }, () =>{
          this.setState({
              requestFailed: true
          })
      })
  }

  render() {
    if (this.state.requestFailed) return <p>Failed..</p>
    if (!this.state.personIndexData) return <p>Loading...</p>
    return (
      <div>
        <h2>{this.state.personIndexData._links}</h2>
      </div>
    )
  }
}
