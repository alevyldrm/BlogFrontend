import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages import

import Home from '../Pages/Home'
import Authors from '../Pages/Authors'
import AuthorPost from '../Pages/AuthorPost'
import CategoryPost from '../Pages/CategoryPost'
import Dashboard from '../Pages/Dashboard'
import Delete from '../Pages/Delete'
import EditPost from '../Pages/EditPost'
import ErrorPage from '../Pages/ErrorPage'
import Logout from '../Pages/Logout'
import Login from '../Pages/Login'
import PostDetail from '../Pages/PostDetail'
import Register from '../Pages/Register'
import UserProfile from '../Pages/UserProfile'
import CreatePost from '../Pages/CreatePost'
import { FakePosts } from '../data/data'
import { useState } from 'react'



function RouterConfig() {

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/authors' element={<Authors />} />
                    <Route path='/posts/user/:id' element={<AuthorPost />} />
                    <Route path='/posts/categories/:category' element={<CategoryPost />} />
                    <Route path='myposts/:id' element={<Dashboard />} />
                    <Route path='/posts/:id/delete' element={<Delete />} />
                    <Route path='/posts/:id/edit' element={<EditPost />} />
                    <Route path='*' element={<ErrorPage />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/posts/:id' element={<PostDetail />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile/:id' element={<UserProfile />} />
                    <Route path='/create' element={<CreatePost />} />
                </Routes>
                <Footer />



            </BrowserRouter>
        </div>
    )
}

export default RouterConfig
