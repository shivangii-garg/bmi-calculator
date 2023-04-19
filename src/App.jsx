import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import "./styles.css";
import { calculateBMI } from "./formSlice";
import { Link, useNavigate } from "react-router-dom";
import NewPage from "./newPage";

export default function App() {
  const height = useSelector((state) => state.form.heightInput);
  const weight = useSelector((state) => state.form.weightInput);
  const result = useSelector((state) => state.form.result);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleClick = () => {
    // const smallResult = height * weight;
    dispatch(calculateBMI([height, weight]));
    // console.log("resulttt: ", result);
    // console.log("result:", `/form/${result} `);
    // nav(`/form/${result} `);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <Form />
      <p>Your BMI is: {result} </p>
      <button onClick={handleClick}>Calculate BMI </button>
    </div>
  );
}
