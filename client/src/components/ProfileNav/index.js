import React, { Component } from "react";
//import "./style.css";

class ProfileNav extends Component {
    render() {
        return (
          
              <a href={this.props.link} className="login"><u> login </u></a>
          
        )
    }
  }
  
  export default ProfileNav;
