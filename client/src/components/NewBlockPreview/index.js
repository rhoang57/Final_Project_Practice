import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";


class NewBlockPreview extends Component {
  render() {
      return (
          <div className="card h-100">
            <div className="new-card-title"><h2>START A NEW STORY<span className="add-block"><Link to={this.props.newblocklink} className="add-block">    +</Link></span></h2></div>
            <div className="preview-text"><br /> <br /> <br /> <br /></div>
            <div className="container">
            <h6 className="word-count">Word Count: 0</h6>
            <h6 className="contributor-count">No. of Contributors: 0</h6>
            </div>
          </div>
      )
  }
}

export default NewBlockPreview;
