import React from "react";
import '@styles/layout/Footer.css'

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
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