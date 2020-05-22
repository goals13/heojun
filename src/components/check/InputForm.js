import React, { Component } from "react";
import axios from "axios";

import './InputForm.scss';

class InputForm extends Component {
  state = {
    sex: '',
    age: '',
    alchol: '',
    cigarette: '',
    exercise: '',
    length: '',
    weight: '',
    obesity: '',
    bmi: '',
    waist: '',
    ratio: '',
    left: '',
    right: '',
    max: '',
    min: '',
    protein: '',
    color: '',
    sugar: '',
    tchol: '',
    hdl: '',
    ldl: '',
    crea: '',
    ast: '',
    alt: '',
    gam_gpt: ''
  };

  onsexChange = e => {this.setState({sex: e.target.value});};
  onageChange = e => {this.setState({age: e.target.value});};
  onalcholChange = e => {this.setState({alchol: e.target.value});};
  oncigaretteChange = e => {this.setState({cigarette: e.target.value});};
  onexerciseChange = e => {this.setState({exercise: e.target.value});};
  onlengthChange = e => {this.setState({length: e.target.value});};
  onweightChange = e => {this.setState({weight: e.target.value});};
  onobesityChange = e => {this.setState({obesity: e.target.value});};
  onbmiChange = e => {this.setState({bmi: e.target.value});};
  onwaistChange = e => {this.setState({waist: e.target.value});};
  onratioChange = e => {this.setState({ratio: e.target.value});};
  onleftChange = e => {this.setState({left: e.target.value});};
  onrightChange = e => {this.setState({right: e.target.value});};
  onmaxChange = e => {this.setState({max: e.target.value});};
  onminChange = e => {this.setState({min: e.target.value});};
  onproteinChange = e => {this.setState({protein: e.target.value});};
  oncolorChange = e => {this.setState({color: e.target.value});};
  onsugarChange = e => {this.setState({sugar: e.target.value});};
  ontcholChange = e => {this.setState({tchol: e.target.value});};
  onhdlChange = e => {this.setState({hdl: e.target.value});};
  onldlChange = e => {this.setState({ldl: e.target.value});};
  oncreaChange = e => {this.setState({crea: e.target.value});};
  onastChange = e => {this.setState({ast: e.target.value});};
  onaltChange = e => {this.setState({alt: e.target.value});};
  ongam_gptChange = e => {this.setState({gam_gpt: e.target.value});};
  
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      sex: this.state.sex,
      age: this.state.age,
      alchol: this.state.alchol,
      cigarette: this.state.cigarette,
      exercise: this.state.exercise,
      length: this.state.length,
      weight: this.state.weight,
      obesity: this.state.obesity,
      bmi: this.state.bmi,
      waist: this.state.waist,
      ratio: this.state.ratio,
      left: this.state.left,
      right: this.state.right,
      max: this.state.max,
      min: this.state.min,
      protein: this.state.protein,
      color: this.state.color,
      sugar: this.state.sugar,
      tchol: this.state.tchol,
      hdl: this.state.hdl,
      ldl: this.state.ldl,
      crea: this.state.crea,
      ast: this.state.ast, 
      alt: this.state.alt,
      gam_gpt: this.state.gam_gpt
    };
    axios
      .post("http://3.34.5.242:5000/TEST2", data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input placeholder="sex" value={this.state.sex} onChange={this.onsexChange} required /><br />
          <input placeholder="age" value={this.state.age} onChange={this.onageChange} required /><br />
          <input placeholder="alchol" value={this.state.alchol} onChange={this.onalcholChange} required /><br />
          <input placeholder="cigarette" value={this.state.cigarette} onChange={this.oncigaretteChange} required /><br />
          <input placeholder="exercise" value={this.state.exercise} onChange={this.onexerciseChange} required /><br />
          <input placeholder="length" value={this.state.length} onChange={this.onlengthChange} required /><br />
          <input placeholder="weight" value={this.state.weight} onChange={this.onweightChange} required /><br />
          <input placeholder="obesity" value={this.state.obesity} onChange={this.onobesityChange} required /><br />
          <input placeholder="bmi" value={this.state.bmi} onChange={this.onbmiChange} required /><br />
          <input placeholder="waist" value={this.state.waist} onChange={this.onwaistChange} required /><br />
          <input placeholder="ratio" value={this.state.ratio} onChange={this.onratioChange} required /><br />
          <input placeholder="left" value={this.state.left} onChange={this.onleftChange} required /><br />
          <input placeholder="right" value={this.state.right} onChange={this.onrightChange} required /><br />
          <input placeholder="max" value={this.state.max} onChange={this.onmaxChange} required /><br />
          <input placeholder="min" value={this.state.min} onChange={this.onminChange} required /><br />
          <input placeholder="protein" value={this.state.protein} onChange={this.onproteinChange} required /><br />
          <input placeholder="color" value={this.state.color} onChange={this.oncolorChange} required /><br />
          <input placeholder="sugar" value={this.state.sugar} onChange={this.onsugarChange} required /><br />
          <input placeholder="tchol" value={this.state.tchol} onChange={this.ontcholChange} required /><br />
          <input placeholder="hdl" value={this.state.hdl} onChange={this.onhdlChange} required /><br />
          <input placeholder="ldl" value={this.state.ldl} onChange={this.onldlChange} required /><br />
          <input placeholder="crea" value={this.state.crea} onChange={this.oncreaChange} required /><br />
          <input placeholder="ast" value={this.state.ast} onChange={this.onastChange} required /><br />
          <input placeholder="alt" value={this.state.alt} onChange={this.onaltChange} required /><br />
          <input placeholder="gam_gpt" value={this.state.gam_gpt} onChange={this.ongam_gptChange} required /><br /><br />
          <button type="submit" className="button">등록</button>
        </form>
      </div>
    );
  }
}

export default InputForm;