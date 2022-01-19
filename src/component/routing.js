import React from 'react';
import {BrowserRouter,Route,Routes,Link,Outlet} from 'react-router-dom';
import {Home} from './home/home'
import {Contact} from '../component/contact/contact'
import {About} from '../component/about/about'
import {Register} from '../component/register/register.component'
import {Login} from '../component/login/login.component'
import {Header} from '../component/common/header/header.component'
import {Category} from '../component/category/category'
import {CategoryForm} from '../component/category/categoryform'
import {CategoryDetail} from '../component/category/categorydetail'


export function AppRouting(){
    return(
        <BrowserRouter>
            <Header>     
            </Header>
            <Routes>
            <Route path="/" element={<Home></Home>}></Route> 
            <Route path='/category' element={<Category/>}>
            <Route path='create' element={<CategoryForm/>} ></Route>
            <Route path=':id' element={<CategoryDetail/>} ></Route>
            </Route>
           
            <Route path="/contact" element={<Contact></Contact>}> </Route> 
            <Route path="/about" element={<About></About>}></Route> 
            <Route path="/login" element={<Login></Login>}></Route> 
            <Route path="/register" element={<Register></Register>}></Route> 
            </Routes>
        </BrowserRouter>
    );
}