import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AdminDashoboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AddProduct from "./pages/AddProducts";
import EditProduct from "./pages/EditProduct";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import AdminOrders from "./pages/AdminOrders";
function App(){
  const [search, setSearch]= useState("");
  
  
    return(
      <>
         <Navbar search={search} setSearch={setSearch} />
        
          <Routes>
            <Route path="/" element={<Home search={search}/>}/>
            <Route path="/products" element={<Products search={search} />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashoboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/edit-product/:id" element={<EditProduct />} />
             <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
          </Routes>
       </>
        
    )
    
     
}

export default App;