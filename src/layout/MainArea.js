import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"

class MainArea extends Component {
  render() {
    return (
        <Container fluid={true} className="Main">
           <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {/* <Row>
            <Col xs="6" sm="4">
              <div class="bg-primary text-white">.bg-primary .col-6 .col-sm-4</div>
              <div class="bg-success text-white">.bg-primary .col-6 .col-sm-4</div>
            </Col>
            <Col xs="6" sm="4" class="p-3 mb-2 bg-light text-dark">
            <div class="bg-light text-dark">.bg-primary .col-6 .col-sm-4</div>
            </Col>
          </Row> */}
        </Container>
    )
  }
}

export default MainArea
