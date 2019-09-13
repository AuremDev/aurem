import React from "react";
//import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  // NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import LoginModal from "../../views/index-sections/modal/LoginModal.js";
import RegisterModal from "../../views/index-sections/modal/RegisterModal.js";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarBgColor, setNavbarBgColor] = React.useState("gradient");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if(document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
        setNavbarBgColor("navbar-solid")
      } else {
        setNavbarBgColor("gradient");
      }
      if ( document.documentElement.scrollTop > 399 || document.body.scrollTop > 399 ) {
        setNavbarColor("");
      } else if ( document.documentElement.scrollTop < 400 || document.body.scrollTop < 400 ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color={navbarBgColor}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              id="navbar-brand"
            >
              <font class="navbar-logo-text">Aurem.</font>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Lorem Ipsum Dolor Sit Met.
            </UncontrolledTooltip>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <Button outline
                  color="navbarColor"
                  type="button"
                >
                  <i class="fas fa-home mr-1"></i>Home
                </Button>
              </NavItem>
              <NavItem>
                <LoginModal/>
              </NavItem>
              <NavItem>
                <RegisterModal/>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
