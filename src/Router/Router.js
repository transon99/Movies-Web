import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../pages/Account/Account'
import Detail from '../pages/Detail/Detail'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Search from '../pages/Search/Search'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
        </Routes>
    )
}
