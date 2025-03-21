import React from 'react';
import {Route, Routes} from "react-router-dom";

import Home from "@pages/Home";
import About from "@pages/about/About";
import Services from "@pages/services/Services";
import Contact from "@pages/contact/Contact";

import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

        </Routes>
    )
}