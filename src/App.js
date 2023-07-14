import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const removeAllCart = (cart) => {
    setCart([]);
  }

  return (
    <div className="bg-slate-200">
      <div className="flex flex-col items-center justify-center align-middle min-h-screen shadow-lg">
      <Navbar cart={cart}/>
        <div className="flex flex-wrap w-3/4 justify-center gap-5 bg-sky-50">
          <ProductList addToCart={addToCart} />
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            removeAllCart={removeAllCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
