import React, { Component, Fragment } from "react";

class InputManagement extends Component {
  state = {
    sex: "",
    age: "",
    alchol: "",
  };

  render() {
    const { sex, age, alchol } = this.props.info;
   
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    return (
        <div style={style}>
            <Fragment>
              <div>
                <b>{sex}</b>
              </div>
              <div>{age}</div>
              <div>{alchol}</div>
            </Fragment>
        </div>
    );
  }
}

export default InputManagement;