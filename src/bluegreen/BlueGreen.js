import React, { Component } from "react"
import { Alert } from "reactstrap"
import blueGreenImg from "./bluegreen.png"
 
const ACTUATOR_SERVICE_URL = `http://bluegreen-dev.apps.c3smonkey.ch//actuator/info`

const divStyle = {
  padding: "10px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
  color: "#4db1e8",
  textAlign: "center",
  fontFamily: "sans-serif"
}

const ImageBlueGreen = () => (
  <div style={divStyle}>
    <img src={blueGreenImg} width="500" height="300"  alt="bluegreen" />
  </div>
)
 

export default class BlueGreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.fetchData()
    this.timer = setInterval(() => this.fetchData(), 500)
  }
  componentWillUnmount() {
    this.timer = null
  }

  fetchData = () => {
    this.setState({ ...this.state, isFetching: true })
    fetch(ACTUATOR_SERVICE_URL)
      .then(response => response.json())
      .then(result => this.setState({ actuator: result, isFetching: false }))
      .catch(e => console.log(e))
  }

  render() {
    if (!this.state.actuator) return <p>Loading...</p>
    return (
      <div id="layout-content" className="layout-content-wrapper">
        <h2 class="text-center ">Blue-Green Deployment</h2>
        <ImageBlueGreen />
        <div className="panel-list">
          <Alert color={`${this.state.actuator.git.branch === "feature2" ? "success" : "primary"}`} className="code">
            Hello I`m {this.state.actuator.git.branch} from {this.state.actuator.build.artifact}
          </Alert>
        </div>
      </div>
    )
  }
}
