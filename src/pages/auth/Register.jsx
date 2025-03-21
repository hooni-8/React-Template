import React, {useState} from "react";

import "@styles/pages/auth/Register.css"

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });

    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // 비밀번호 확인 검증
        if (name === 'confirmPassword' || (name === 'password' && formData.confirmPassword)) {
            if (name === 'password' && value !== formData.confirmPassword) {
                setPasswordError('Passwords do not match');
            } else if (name === 'confirmPassword' && value !== formData.password) {
                setPasswordError('Passwords do not match');
            } else {
                setPasswordError('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        // 회원가입 로직 구현
        console.log('Signup form submitted:', formData);
    };

    return (
        <div className="page-container">
            <main className="signup-container">
                <div className="signup-card">
                    <div className="signup-header">
                        <h1>Create an Account</h1>
                        <p>Join us today and get started with your new account</p>
                    </div>

                    <div className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                required
                            />
                            <small className="form-hint">Password must be at least 8 characters long</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                required
                                className={passwordError ? 'input-error' : ''}
                            />
                            {passwordError && <small className="error-message">{passwordError}</small>}
                        </div>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="agreeTerms">
                                I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-signup-submit">Create Account</button>
                    </div>

                    <div className="signup-footer">
                        <p>Already have an account? <a href="/login">Sign In</a></p>
                    </div>
                </div>
            </main>
        </div>
    );
}
