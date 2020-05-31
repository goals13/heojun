import React, { Component, useState } from "react";
import axios from "axios";
import './InputForm.scss'; 
import { useResultContext } from '../../store/context';
import Typography from '@material-ui/core/Typography';


function InputForm () {
  const { result, setResult } = useResultContext();
  const [data, setData] = useState({
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
  })

  const onsexChange = e => {setData({...data, sex: e.target.value});};
  const onageChange = e => {setData({...data, age: e.target.value});};
  const onalcholChange = e => {setData({...data, alchol: e.target.value});};
  const oncigaretteChange = e => {setData({...data, cigarette: e.target.value});};
  const onexerciseChange = e => {setData({...data, exercise: e.target.value});};
  const onlengthChange = e => {setData({...data, length: e.target.value});};
  const onweightChange = e => {setData({...data, weight: e.target.value});};
  const onobesityChange = e => {setData({...data, obesity: e.target.value});};
  const onbmiChange = e => {setData({...data, bmi: e.target.value});};
  const onwaistChange = e => {setData({...data, waist: e.target.value});};
  const onratioChange = e => {setData({...data, ratio: e.target.value});};
  const onleftChange = e => {setData({...data, left: e.target.value});};
  const onrightChange = e => {setData({...data, right: e.target.value});};
  const onmaxChange = e => {setData({...data, max: e.target.value});};
  const onminChange = e => {setData({...data, min: e.target.value});};
  const onproteinChange = e => {setData({...data, protein: e.target.value});};
  const oncolorChange = e => {setData({...data, color: e.target.value});};
  const onsugarChange = e => {setData({...data, sugar: e.target.value});};
  const ontcholChange = e => {setData({...data, tchol: e.target.value});};
  const onhdlChange = e => {setData({...data, hdl: e.target.value});};
  const onldlChange = e => {setData({...data, ldl: e.target.value});};
  const oncreaChange = e => {setData({...data, crea: e.target.value});};
  const onastChange = e => {setData({...data, ast: e.target.value});};
  const onaltChange = e => {setData({...data, alt: e.target.value});};
  const ongam_gptChange = e => {setData({...data, gam_gpt: e.target.value});};
  
  const handleSubmit = () => {
    // e.preventDefault();
    const data1 = {
      sex: data.sex,
      age: data.age,
      alchol: data.alchol,
      cigarette: data.cigarette,
      exercise: data.exercise,
      length: data.length,
      weight: data.weight,
      obesity: data.obesity,
      bmi: data.bmi,
      waist: data.waist,
      ratio: data.ratio,
      left: data.left,
      right: data.right,
      max: data.max,
      min: data.min,
      protein: data.protein,
      color: data.color,
      sugar: data.sugar,
      tchol: data.tchol,
      hdl: data.hdl,
      ldl: data.ldl,
      crea: data.crea,
      ast: data.ast,
      alt: data.alt,
      gam_gpt: data.gam_gpt
    };
    axios
      .post("http://3.34.5.242:5000/TEST2", data1)
      .then(res => {
        console.log(res)
        console.log(res.Colonoscopy)
        setResult({
          c: res.data.Colonoscopy,
          g: res.data.Gastroscopy
        })
        
      })
      .catch(err => console.log(err));
      // window.location = "/retrieve"
  };

    return (
      <div className="myForm">
        
        {/* <form className="post" onSubmit={this.handleSubmit}> */}
        <br /><Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>Measurement value input</Typography>
          <input placeholder="sex" value={data.sex} onChange={(e) => onsexChange(e)} required /><br />
          <input placeholder="age" value={data.age} onChange={(e) => onageChange(e)} required /><br />
          <input placeholder="alchol" value={data.alchol} onChange={(e) => onalcholChange(e)} required /><br />
          <input placeholder="cigarette" value={data.cigarette} onChange={(e) => oncigaretteChange(e)} required /><br />
          <input placeholder="exercise" value={data.exercise} onChange={(e) => onexerciseChange(e)} required /><br />
          <input placeholder="length" value={data.length} onChange={(e) => onlengthChange(e)} required /><br />
          <input placeholder="weight" value={data.weight} onChange={(e) => onweightChange(e)} required /><br />
          <input placeholder="obesity" value={data.obesity} onChange={(e) => onobesityChange(e)} required /><br />
          <input placeholder="bmi" value={data.bmi} onChange={(e) => onbmiChange(e)} required /><br />
          <input placeholder="waist" value={data.waist} onChange={(e) => onwaistChange(e)} required /><br />
          <input placeholder="ratio" value={data.ratio} onChange={(e) => onratioChange(e)} required /><br />
          <input placeholder="left" value={data.left} onChange={(e) => onleftChange(e)} required /><br />
          <input placeholder="right" value={data.right} onChange={(e) => onrightChange(e)} required /><br />
          <input placeholder="max" value={data.max} onChange={(e) => onmaxChange(e)} required /><br />
          <input placeholder="min" value={data.min} onChange={(e) => onminChange(e)} required /><br />
          <input placeholder="protein" value={data.protein} onChange={(e) => onproteinChange(e)} required /><br />
          <input placeholder="color" value={data.color} onChange={(e) => oncolorChange(e)} required /><br />
          <input placeholder="sugar" value={data.sugar} onChange={(e) => onsugarChange(e)} required /><br />
          <input placeholder="tchol" value={data.tchol} onChange={(e) => ontcholChange(e)} required /><br />
          <input placeholder="hdl" value={data.hdl} onChange={(e) => onhdlChange(e)} required /><br />
          <input placeholder="ldl" value={data.ldl} onChange={(e) => onldlChange(e)} required /><br />
          <input placeholder="crea" value={data.crea} onChange={(e) => oncreaChange(e)} required /><br />
          <input placeholder="ast" value={data.ast} onChange={(e) => onastChange(e)} required /><br />
          <input placeholder="alt" value={data.alt} onChange={(e) => onaltChange(e)} required /><br />
          <input placeholder="gam_gpt" value={data.gam_gpt} onChange={(e) => ongam_gptChange(e)} required /><br /><br />
          <button onClick={() => handleSubmit()} className="button">등록</button>
        {/* </form> */}
      </div>
    );
}

export default InputForm;