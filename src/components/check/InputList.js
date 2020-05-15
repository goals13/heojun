import React, { Component } from "react";
import InfoManagement from "./InputManagement";

class InputList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn('onRemove not defined'),
  }

  render() {
    const { data } = this.props;
    if (!data) return null;
    const list = data.map(info => (
      <InfoManagement
        info={info}
        key={info.id}
      />
    ));
    return <div>{list}</div>;
  }
}

export default InputList;