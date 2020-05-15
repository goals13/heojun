import React, {Component, Fragment} from 'react';
import InputForm from './check/InputForm';
import InputList from './check/InputList';
import './ToCheck.scss';


class ToCheck extends Component {
  
    id = 0;
    state = {
      information: [],
    };

    handleCreate = (data) => {
      console.log(data);
      const { information } = this.state;
      this.setState({
        information: information.concat({ id: this.id++, ...data })
      })
    }

    render() {
      return (
        <Fragment>
          <InputForm onCreate={this.handleCreate} />
           결과 : {JSON.stringify(this.state.information)} 
          <InputList
          data={this.state.information}
          />
        </Fragment>
      );
    }
  }

export default ToCheck;