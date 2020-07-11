import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

import SideDrawer from "./sideDrawer";

class Header extends Component {

  state={
    drawerOpen:false
  }

  toggleDrawer = (value) =>{
    this.setState({
      drawerOpen:value
    })
  }

  render() {
    return (
      <div>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                  <img
                    className="logoace"
                    src={"assets/img/logo/logoace.png"}
                    alt=""
                  />
                  <a href={"index.html"} className="logoanchor">
                    <img
                      className="logotext"
                      src={"assets/img/logo/aceLogo.png"}
                      alt=""
                    />
                  </a>
                </div>

                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/Works">Works</Link>

                        <ul className="submenu">
                          <li>
                            <Link to="/2DDesigns">2D Designs</Link>
                          </li>
                          <li>
                            <Link to="/AutoCadDesigns">AutoCad Designs</Link>
                          </li>
                          <li>
                            <Link to="/EtabsandSolidWorks">
                              Etabs and SolidWorks
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contactus">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-btns d-none d-lg-block f-right">
                  <Link to="/contactus" className="btn header-btn">
                    Contact us
                  </Link>
                </div>
                <IconButton
                  aria-label="Menu"
                  className="text-white"
                  onClick={()=>{
                    this.toggleDrawer(true)
                  }}
                >
                  <MenuIcon/>
                </IconButton>
                <SideDrawer
                  className="bg-dark opacity-4"
                  open={this.state.drawerOpen}
                  onClose={(value)=> this.toggleDrawer(value)}
                /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
