import React, { Component } from 'react';
import NavigationBtn from "/home/shimanto/reactjs_projects/test-app/src/Layout/Elements/NavigationBtn/NavigationBtn";


class Navbar extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavigationBtn  nameAttr = "Custom" classNameCustom='navbar-brand' searchLocation='https://stackoverflow.com/questions/41322867/react-unable-to-import-component-module-not-found' />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavigationBtn nameAttr = "MyHome" classNameCustom='nav-link' searchLocation='https://www.robinwieruch.de/react-pass-props-to-component/' />
            </li>
            <li className="nav-item">
            <NavigationBtn nameAttr = "LinkOne" classNameCustom='nav-link' searchLocation='https://www.robinwieruch.de/react-pass-props-to-component/' />
            </li>
            <li className="nav-item dropdown">
                <NavigationBtn nameAttr="MyDropDown" classNameCustom='nav-link dropdown-toggle' role="button" my_data_toggle="dropdown"  my_aria_haspopup="true" my_aria_expanded="false" datasearchLocation='#' />
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                <NavigationBtn  nameAttr = "Action1" classNameCustom='dropdown-item' searchLocation='#' />
                <NavigationBtn  nameAttr = "Action2" classNameCustom='dropdown-item' searchLocation='#' />
                <div className="dropdown-divider"></div>
                <NavigationBtn  nameAttr = "Action3" classNameCustom='dropdown-item' searchLocation='#' />
                </div>
   
            </li>
            <li className="nav-item">
                <NavigationBtn  nameAttr = "Disabled" classNameCustom='nav-link disabled' searchLocation='#' />
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>

    );
  }
}

export default Navbar;
