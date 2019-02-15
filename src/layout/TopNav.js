import React, { Component } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"
import "./Layout.css"
import { Clock } from "../timer/Clock"
import { Timer } from "../timer/Timer"

class TopNav extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="xl" >
          <NavbarBrand href="/">MonkeyApp</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/c3smonkey/">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Navbar color="dark" dark expand="xl" fixed="bottom">
          <Clock clockColor="#1ac545" />
        </Navbar>
      </div>
    )
  }
}

export default TopNav
