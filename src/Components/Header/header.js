import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";
// Style
import "./header.css";

// Images
// import Logo from '';

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [sticky, setSticky] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  const change = () => {
    setMenu(!menu);
  };
  const stickyHeader = () => {
    window.addEventListener("scroll", function () {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  };

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  useEffect(() => {
    stickyHeader();
  }, []);

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <header className={sticky ? "sticky" : ""}>
        <div className="container">
          <nav className="nav" id="nav">
            <div className="nav-inner">
              <NavLink to="/">
                {/* <img src={Logo} alt="Logo" title="RADEE8" className="logo"></img> */}
                <h3>TIK TIK</h3>
              </NavLink>
              <ul
                className={
                  menu
                    ? "row align-items-center menus"
                    : "row align-items-center menus activeX"
                }
              >
                <li className="nav-item">
                  <NavLink to="/" onClick={change}>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about-us" onClick={change}>
                    <span>About Us</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" onClick={change}>
                    <span>Our Services</span>
                  </NavLink>
                  {/* <div className="submenu">
                    <ul>
                      <li>
                        <NavHashLink to="/services#Entity">ENTITY SETUP & MANAGEMENT</NavHashLink>
                      </li>
                      <li>
                        <NavHashLink to="/services#Administration"> ADMINISTRATION & FACILITIES MANAGEMENT</NavHashLink>
                      </li>
                      <li>
                        <NavHashLink to="/services#Accounting">ACCOUNTING & TAXATION</NavHashLink>
                      </li>
                      <li>
                        <NavHashLink to="/services#Shared">SHARED HUMAN RESOURCES</NavHashLink>
                      </li>
                      <li>
                        <NavHashLink to="/services#Payroll">PAYROLL SERVICES</NavHashLink>
                      </li>
                      <li>
                        <NavHashLink to="/services#Technical">TECHNICAL & SOFTWARE COMPLIANCE</NavHashLink>
                      </li>

                    </ul>
                  </div> */}
                </li>
                <li onClick={change} className="nav-item">
                  <NavLink to="/success-story">
                    <span>Contact Us</span>
                  </NavLink>
                </li>
              </ul>
              <button
                className={menu ? "hamburger" : "hamburger activeX"}
                onClick={menuHandler}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
