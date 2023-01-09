import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "assets/css/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <header id="header">
          <h1>
          <Link to="/">Home & Contact</Link>
          </h1>
          <nav className="links">
            <ul>
              <li>
                <Link to="/qualifications">Qualifications</Link>
              </li>
              <li>
                <Link to="/cs">Computer Science</Link>
              </li>
              <li>
                <Link to="/careeredu">Career & Education</Link>
              </li>
              <li>
                <Link to="/mathphys">Math & Physics</Link>
              </li>
              <li>
                <Link to="/policies">Policies</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <nav className="main">
            <ul>
              <li className="menu">
                <a className="fa-bars">
                  <Menu
                    isOpen={this.state.menuOpen}
                    onStateChange={state => this.handleStateChange(state)}
                    right
                    width={275}
                  >
                    <Link onClick={() => this.closeMenu()} to="/">
                     Home & Contact
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/qualifications">
                      Qualifications
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/cs">
                      Computer Science
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/careeredu">
                      Career & Education
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/mathphys">
                      Math & Physics
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/policies">
                      Policies
                    </Link>
                    <Link onClick={() => this.closeMenu()} to="/contact">
                      Contact
                    </Link>
                  </Menu>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavBar;
