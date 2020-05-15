// file: src/components/InputForm.js
import React, { Component } from 'react';

class InputForm extends Component {
  state = {
    sex: '',
    age: '',
    alchol: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      sex: '',
      age: '',
      alchol: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        성별 : <input
          name="sex"
          placeholder="성 [남자 : 1 / 여자 : 2]"
          value={this.state.sex}
          onChange={this.handleChange}
        /><br /><br />
        나이 : <input
          name="age"
          placeholder="나이 [ ex)18 ]"
          value={this.state.age}
          onChange={this.handleChange}
        /><br /><br />
        alchol : <input
          name="alchol"
          placeholder="alchol [ ex)1,2,3 ]"
          value={this.state.alchole}
          onChange={this.handleChange}
        />
        <br /><br /><button type="submit">등록</button>
      </form>
    );
  }
}

export default InputForm;