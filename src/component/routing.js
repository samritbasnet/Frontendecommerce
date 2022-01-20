import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { Home } from "./home/home";
import { Register } from "../component/user/register/register.component";
import { Login } from "../component/user/login/login.component"
import { Header } from "../component/common/header/header.component";
import { Category } from "../component/category/category";
import {Product} from "../component/product/product";



export function AppRouting() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>   
        <Route path="/category" element={<Category />}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
