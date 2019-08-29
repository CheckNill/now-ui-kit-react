import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
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
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              // href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              target="_blank"
              id="navbar-brand"
              onClick={e => {
                e.preventDefault();
               window.scroll(0,0)
              }}
            >
              首页
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
            
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            
              <NavItem>
                <NavLink
                  href="#pablo"
                  to="/landing-page"              
                  tag={Link}  
                >
                  <i className="now-ui-icons education_hat"></i>
                  <p>关于我们</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  to="/profile-page"              
                  tag={Link}  
                >
                  <i className="now-ui-icons location_compass-05"></i>
                  <p>联系我们</p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="#pablo"     
                  to="/login-page"              
                  tag={Link}                             
                >
                  <i className="now-ui-icons users_single-02"></i>
                  <p>注册/登录</p>                  
                </NavLink>
              </NavItem>   */}
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
