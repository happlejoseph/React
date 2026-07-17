import { useDispatch, useSelector } from "react-redux";

const CounterData = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Add
      </button>
    </div>
  );
};

export default CounterData;