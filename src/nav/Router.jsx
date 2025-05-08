import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "@pages/Home";

import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/home" element={<Home />} />

        </Routes>
    )
}