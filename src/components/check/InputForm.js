import React, { Component, useState } from "react";
import axios from "axios";
import './InputForm.scss'; 
import { useResultContext } from '../../store/context';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function InputForm () {
  const { result, setResult } = useResultContext();
  const [data, setData] = useState({
    name: '',
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

  const onnameChange = e => {setData({...data, name: e.target.value});};
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
      name: data.name,
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
          g: res.data.Gastroscopy,
          n: res.data.name
        })
        
      })
      .catch(err => console.log(err));
      // window.location = "/retrieve"
  };
  const classes = useStyles();

    return (
      <div className={classes.root} noValidate autoComplete="off">
        <div className="myForm">
        {/* <form className="post" onSubmit={this.handleSubmit}> */}
        <br /><Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>Measurement value input</Typography>
          <TextField label="name" id="outlined-size-small" id="outlined-size-small" defaultValue="name" variant="outlined" size="small" value={data.name} onChange={(e) => onnameChange(e)} required /><br /><br />
          <TextField label="sex" id="outlined-size-small" id="outlined-size-small" defaultValue="sex" variant="outlined" size="small" value={data.sex} onChange={(e) => onsexChange(e)} required />
          <TextField label="age" id="outlined-size-small" id="outlined-size-small" defaultValue="age" variant="outlined" size="small" value={data.age} onChange={(e) => onageChange(e)} required />
          <TextField label="alchol" id="outlined-size-small" id="outlined-size-small" defaultValue="alchol" variant="outlined" size="small" value={data.alchol} onChange={(e) => onalcholChange(e)} required /><br />
          <TextField label="cigarette" id="outlined-size-small" id="outlined-size-small" defaultValue="cigarette" variant="outlined" size="small" value={data.cigarette} onChange={(e) => oncigaretteChange(e)} required />
          <TextField label="exercise" id="outlined-size-small" id="outlined-size-small" defaultValue="exercise" variant="outlined" size="small" value={data.exercise} onChange={(e) => onexerciseChange(e)} required />
          <TextField label="length" id="outlined-size-small" id="outlined-size-small" defaultValue="length" variant="outlined" size="small" value={data.length} onChange={(e) => onlengthChange(e)} required /><br />
          <TextField label="weight" id="outlined-size-small" id="outlined-size-small" defaultValue="weight" variant="outlined" size="small" value={data.weight} onChange={(e) => onweightChange(e)} required />
          <TextField label="obesity" id="outlined-size-small" id="outlined-size-small" defaultValue="obesity" variant="outlined" size="small" value={data.obesity} onChange={(e) => onobesityChange(e)} required />
          <TextField label="bmi" id="outlined-size-small" id="outlined-size-small" defaultValue="bmi" variant="outlined" size="small" value={data.bmi} onChange={(e) => onbmiChange(e)} required /><br />
          <TextField label="waist" id="outlined-size-small" id="outlined-size-small" defaultValue="waist" variant="outlined" size="small" value={data.waist} onChange={(e) => onwaistChange(e)} required />
          <TextField label="ratio" id="outlined-size-small" id="outlined-size-small" defaultValue="ratio" variant="outlined" size="small" value={data.ratio} onChange={(e) => onratioChange(e)} required />
          <TextField label="left" id="outlined-size-small" id="outlined-size-small" defaultValue="left" variant="outlined" size="small" value={data.left} onChange={(e) => onleftChange(e)} required /><br />
          <TextField label="right" id="outlined-size-small" id="outlined-size-small" defaultValue="right" variant="outlined" size="small" value={data.right} onChange={(e) => onrightChange(e)} required />
          <TextField label="max" id="outlined-size-small" id="outlined-size-small" defaultValue="max" variant="outlined" size="small" value={data.max} onChange={(e) => onmaxChange(e)} required />
          <TextField label="min" id="outlined-size-small" id="outlined-size-small" defaultValue="min" variant="outlined" size="small" value={data.min} onChange={(e) => onminChange(e)} required /><br />
          <TextField label="protein" id="outlined-size-small" id="outlined-size-small" defaultValue="protein" variant="outlined" size="small" value={data.protein} onChange={(e) => onproteinChange(e)} required />
          <TextField label="color" id="outlined-size-small" id="outlined-size-small" defaultValue="color" variant="outlined" size="small" value={data.color} onChange={(e) => oncolorChange(e)} required />
          <TextField label="sugar" id="outlined-size-small" id="outlined-size-small" defaultValue="sugar" variant="outlined" size="small" value={data.sugar} onChange={(e) => onsugarChange(e)} required /><br />
          <TextField label="tchol" id="outlined-size-small" id="outlined-size-small" defaultValue="tchol" variant="outlined" size="small" value={data.tchol} onChange={(e) => ontcholChange(e)} required />
          <TextField label="hdl" id="outlined-size-small" id="outlined-size-small" defaultValue="hdl" variant="outlined" size="small" value={data.hdl} onChange={(e) => onhdlChange(e)} required />
          <TextField label="ldl" id="outlined-size-small" id="outlined-size-small" defaultValue="ldl" variant="outlined" size="small" value={data.ldl} onChange={(e) => onldlChange(e)} required /><br />
          <TextField label="crea" id="outlined-size-small" id="outlined-size-small" defaultValue="crea" variant="outlined" size="small" value={data.crea} onChange={(e) => oncreaChange(e)} required />
          <TextField label="ast" id="outlined-size-small" id="outlined-size-small" defaultValue="ast" variant="outlined" size="small" value={data.ast} onChange={(e) => onastChange(e)} required />
          <TextField label="alt" id="outlined-size-small" id="outlined-size-small" defaultValue="alt" variant="outlined" size="small" value={data.alt} onChange={(e) => onaltChange(e)} required /><br />
          <TextField label="gam_gpt" id="outlined-size-small" id="outlined-size-small" defaultValue="gam_gpt" variant="outlined" size="small" value={data.gam_gpt} onChange={(e) => ongam_gptChange(e)} required /><br /><br />
          <button onClick={() => handleSubmit()} className="button">등록</button>
        {/* </form> */}
        </div>
      </div>
    );
}

export default InputForm;