import React, { useEffect } from "react";
import axios from "axios";
export default function View() {
  useEffect(() => {
    async function fetchData() {
      const body ={
        sex: "1",
        age: "1",
        alchol: "1",
        cigarette: "1",
        exercise: "1",
        length: "1",
        weight: "1",
        obesity: "1",
        bmi: "1",
        waist: "1",
        ratio: "1",
        left: "1",
        right: "1",
        max: "1",
        min: "1",
        protein: "1",
        color: "1",
        sugar: "1",
        tchol: "1",
        hdl: "1", 
        ldl: "1",
        crea: "1",
        ast: "1",
        alt: "1",
        gam_gpt: "1"
      };
      const url = "http://3.34.5.242:5000/TEST2";
      const res = await axios.post(url, body);
      console.log(res.data);
    }
    fetchData();
  }, []);
  return (
    <div className="View">
      <h1>sada</h1>
    </div>
  )
}