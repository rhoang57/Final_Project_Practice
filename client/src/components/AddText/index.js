import React, { Component } from "react";
import "./style.css";
import {TextArea, FormBtn} from "../Form";


class AddText extends Component {
  render() {
      return (
            <>
            <div className="add-mode-div">
                {this.props.lastblocktext}
              
              <TextArea />
              <FormBtn children={"submit"}/>
              </div>
              </>
      )
  }
}

export default AddText;