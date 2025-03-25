import React, {useState} from 'react';
import '@styles/pages/Home.css'

import * as gateway from "@components/common/Gateway";

export default function Home() {

    const [currentTab, setCurrentTab] = useState('featured');

    const [userName, setUserName] = useState('');

    const [temp, setTemp] = useState('');

    const token = localStorage.getItem('authToken');

    const test = async () => {
        try {
            const payload = {
                token
            };

            const response = await gateway.post("/auth/session", payload);

            if (response.status === 200) {
                console.log(response.data.data);
                setUserName(response.data.data);
            }

        } catch (e) {
            console.error(e);
        }
    }

    const test2 = async () => {
        try {
            const payload = {
                userId: temp
            };

            const response = await gateway.post("/template/api/v1/test/user", payload);

            if (response.status === 200) {
                console.log(response.data.data);
                setUserName(response.data);
            }

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to MyApp</h1>
                    <p>A simple, clean and modern React template for your next project</p>
                    <button className="btn btn-primary">Get Started</button>
                    <br/><br/><br/>
                    userName ===> {userName}
                    <br/><br/><br/>
                    input : <input type="text" onChange={(e) => setTemp(e.target.value)}/>
                    <br/><br/><br/>
                    <button className="btn btn-primary" onClick={test}>Get</button>
                </div>
            </section>

            <section className="features-section">
                <h2>Key Features</h2>
                <div className="tab-buttons">
                    <button
                        className={`tab-btn ${currentTab === 'featured' ? 'active' : ''}`}
                        onClick={() => setCurrentTab('featured')}
                    >
                        Featured
                    </button>
                    <button
                        className={`tab-btn ${currentTab === 'latest' ? 'active' : ''}`}
                        onClick={() => setCurrentTab('latest')}
                    >
                        Latest
                    </button>
                    <button
                        className={`tab-btn ${currentTab === 'popular' ? 'active' : ''}`}
                        onClick={() => setCurrentTab('popular')}
                    >
                        Popular
                    </button>
                </div>

                <div className="features-grid">
                    {currentTab === 'featured' && (
                        <>
                            <div className="feature-card">
                                <div className="feature-icon">🚀</div>
                                <h3>Fast Performance</h3>
                                <p>Optimized for speed and efficiency</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🎨</div>
                                <h3>Modern Design</h3>
                                <p>Clean and intuitive user interface</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📱</div>
                                <h3>Responsive</h3>
                                <p>Looks great on all devices</p>
                            </div>
                        </>
                    )}

                    {currentTab === 'latest' && (
                        <>
                            <div className="feature-card">
                                <div className="feature-icon">🔄</div>
                                <h3>Real-time Updates</h3>
                                <p>Get the latest information instantly</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🔍</div>
                                <h3>Advanced Search</h3>
                                <p>Find anything in seconds</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🔒</div>
                                <h3>Enhanced Security</h3>
                                <p>Your data is always protected</p>
                            </div>
                        </>
                    )}

                    {currentTab === 'popular' && (
                        <>
                            <div className="feature-card">
                                <div className="feature-icon">💬</div>
                                <h3>Live Chat</h3>
                                <p>Connect with users in real-time</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h3>Analytics</h3>
                                <p>Comprehensive data insights</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🌙</div>
                                <h3>Dark Mode</h3>
                                <p>Easy on the eyes at night</p>
                            </div>
                        </>
                    )}
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to get started?</h2>
                <p>Join thousands of users who already love our product</p>
                <button className="btn btn-large">Start Free Trial</button>
            </section>
        </div>
    );
}