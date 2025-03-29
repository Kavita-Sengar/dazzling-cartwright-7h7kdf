import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductList } from "./redux/slice";

export default function App() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state);
  console.log(product, "state");
  if (product.todo.isLoading) {
    return <h1>Data is Loading.......</h1>;
  }
  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchProductList())}>FetchTodo</button>
      {product.todo.data && product.todo.data.map((x) => <li>{x.title}</li>)}
    </div>
  );
}
