import React, {Component} from 'react';
import PhoneForm from './check/PhoneFrom';

class ToCheck extends Component {
    handleCreate = (data) => {
      console.log(data);
    }
    render() {
      return (
        <div>
          <PhoneForm
            onCreate={this.handleCreate}
          />
        </div>
      );
    }
  }

export default ToCheck;