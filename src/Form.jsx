import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setHeight, setWeight } from "./formSlice";

const Form = () => {
  const height = useSelector((state) => state.form.heightInput);
  const weight = useSelector((state) => state.form.weightInput);
  const dispatch = useDispatch();
  return (
    <>
      <label>
        Weight: &nbsp;
        <input
          type="text"
          value={weight}
          onChange={(event) => dispatch(setWeight(event.target.value))}
        />
      </label>
      &nbsp;
      <label>
        Height: &nbsp;
        <input
          type="text"
          value={height}
          onChange={(event) => dispatch(setHeight(event.target.value))}
        />
      </label>
    </>
  );
};
export default Form;
