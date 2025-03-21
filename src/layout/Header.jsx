import React from "react";
import '@styles/layout/Header.css'
import {NavLink, useNavigate} from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    const navigation = (path) => {
        navigate(path);
    }

    return (
        <header className="home-header">
            <nav className="main-nav">
                <div className="logo">MyApp</div>
                <ul className="nav-links">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/services"}>Services</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
                <div className="auth-buttons">
                    <button className="btn btn-login" onClick={() => navigation("/login")}>Login</button>
                    <button className="btn btn-signup" onClick={() => navigation("/register")}>Sign Up</button>
                </div>
            </nav>
        </header>
    );
}