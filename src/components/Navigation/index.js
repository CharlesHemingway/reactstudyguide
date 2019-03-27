import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'; 



import me from '../../assets/images/me.png';


// <NavItem>
// <Link to={ROUTES.CONTACT} className="navlink hvr-bounce-in">Contact</Link>            
// </NavItem>




export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" color="faded" light>
          <NavbarBrand href="/" className="mr-auto brand hvr-bounce-in">
          <img src={me} alt="me" className="image-2 " />
          

          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2 hvr-bounce-in" />
          
          <Collapse isOpen={!this.state.collapsed} className="collapse" navbar>
            <Nav navbar >
              <NavItem >
              <Link to={ROUTES.HOME} className="navlink hvr-bounce-in">Home</Link>
              </NavItem>
              <NavItem>
               <Link to={ROUTES.ABOUT} className="navlink hvr-bounce-in">About</Link>
              </NavItem>
              <NavItem>
               <Link to={ROUTES.PROJECTS} className="navlink hvr-bounce-in">Projects</Link>
              </NavItem>


            </Nav>
          </Collapse>
          <script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Buy Me a Coffee', '#ff3374', 'X8X3SF64');kofiwidget2.draw();</script>
        </Navbar>
      </div>
    );
  }
}



