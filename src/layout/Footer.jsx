import React from "react";
import '@styles/layout/Footer.css'
import {NavLink} from "react-router-dom";

export default function Footer() {

    return (
        <footer className="home-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>MyApp</h3>
                    <p>Making your life easier since 2025</p>
                </div>
                <div className="footer-section">
                    <h3>Links</h3>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/services"}>Services</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>contact@myapp.com</p>
                    <p>1-800-MYAPP</p>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
            </div>
        </footer>
    );
}