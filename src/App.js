import "./App.css";
import products from "./Products";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList myProducts={products} />
    </div>
  );
}

export default App;
