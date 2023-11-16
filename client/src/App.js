import "./App.css";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

function App() {
  // functions and logic
  const [items, setItems] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/api/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="App">
      <div class="flex-container">
        <h1>Hello</h1>
        <ItemList items={items}/>
      </div>
    </div>
  );
}

export default App;
