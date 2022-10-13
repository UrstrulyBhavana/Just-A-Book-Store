import { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Cart from "./routes/cart/cart.component";
import Home from "./routes/home/home.component";
import Products from "./routes/products/products.component";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='products/*' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App;
