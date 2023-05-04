import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import { ShopContextProvider } from "./Context/shopContext";


function App() {

  return (
   <div className="App">
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>

   </div>
  )
}

export default App
