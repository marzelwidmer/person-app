import React, {  Component } from "react"
import { Alert } from "reactstrap"

const ACTUATOR_SERVICE_URL = `http://bluegreen-dev.apps.c3smonkey.ch//actuator/info`

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
         <div className="panel-list">
         <Alert 
              color={`${ (this.state.actuator.git.branch === 'feature2')? 'success' : 'primary'}`}
              className="code">
              Hello I`m {this.state.actuator.git.branch} from {this.state.actuator.build.artifact}
          </Alert>
         </div>
      </div>
    )
  }
}
