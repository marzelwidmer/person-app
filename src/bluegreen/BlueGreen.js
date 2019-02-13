import React, { Component } from "react"

const ACTUATOR_SERVICE_URL = `http://bluegreen-dev.apps.c3smonkey.ch//actuator/info`
//const ACTUATOR_SERVICE_URL = `http://localhost:8080/actuator/info`
 
export default class BlueGreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.timer = setInterval(() => this.fetchData(), 5000);  
  }
  componentWillUnmount() {
    this.timer = null;
  }

  fetchData = () => {
    this.setState({ ...this.state, isFetching: true })
    fetch(ACTUATOR_SERVICE_URL)
      .then(response => response.json())
      .then(result => this.setState({ actuator: result, isFetching: false }))
      .catch(e => console.log(e))
  }

  render() {
    if (this.state.isFetching) return <p>Failed..</p>
    if (!this.state.actuator) return <p>Loading...</p>
    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">
           {this.state.actuator.git.branch}
       </div>
      </div>

     
    )
  }
}
