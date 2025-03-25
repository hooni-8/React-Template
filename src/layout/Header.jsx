import React, {useEffect, useState} from "react";
import '@styles/layout/Header.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";

import * as gateway from "@components/common/Gateway";

export default function Header() {
    const token = localStorage.getItem('authToken');

    const location = useLocation();

    const navigate = useNavigate();

    const navigation = (path) => {
        navigate(path);
    }

    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await gateway.session();

            setUserName(response.userName);
        }
        fetchData()
    }, [location.pathname]);

    const logout = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
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
                    {token !== null ?
                        <>
                            {userName}
                            <button className="btn btn-signup" onClick={logout}>Log Out</button>
                        </>
                        :
                        <>
                            <button className="btn btn-login" onClick={() => navigation("/login")}>Login</button>
                            <button className="btn btn-signup" onClick={() => navigation("/register")}>Sign Up</button>
                        </>
                    }

                </div>
            </nav>
        </header>
    );
}