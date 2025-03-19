import React from "react";
import '@styles/layout/Header.css'

export default function Header() {

    return (
        <header className="home-header">
            <nav className="main-nav">
                <div className="logo">MyApp</div>
                <ul className="nav-links">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="auth-buttons">
                    <button className="btn btn-login">Login</button>
                    <button className="btn btn-signup">Sign Up</button>
                </div>
            </nav>
        </header>
    );
}