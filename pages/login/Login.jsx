import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
// import app from 'NFT-ftontend/firebaseConfig';
import './Login.css';
import video from './c2.mp4';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyA53xSEzprOUqZCqphJV8ddR0wQcxqGPcs",
    authDomain: "crypto-chord.firebaseapp.com",
    projectId: "crypto-chord",
    storageBucket: "crypto-chord.appspot.com",
    messagingSenderId: "773726248533",
    appId: "1:773726248533:web:43dcb13c01186acc487edc",
    measurementId: "G-G6533DTC5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Login = () => {
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            // Do something with the user info if needed
        } catch (error) {
            const errorMessage = error.message;
            setError(errorMessage);
            console.log(errorMessage);
        }
    };

    return (
        <div className="Loginmain">
            <video autoPlay muted loop id="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="login">
                <h1 className="heading">Login to your account</h1>
                <form onSubmit={handleSignIn}>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input placeholder='enter your email'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder='enter your password'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="login-btn" type="submit">Log In</button>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <p className="meta-text">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </form>

                <p className="meta-text">Too lazy? Login with a social media account</p>

                {/* <div className="social-icons">
                    <button className="social-icon fb">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
                        </svg>
                    </button>
                    <button className="social-icon pr">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M27.542,32.719c-3.297,0-4.516-2.138-4.516-2.138s-0.588,2.309-1.021,3.95s-0.507,1.665-0.927,2.591c-0.471,1.039-1.626,2.674-1.966,3.177c-0.271,0.401-0.607,0.735-0.804,0.696c-0.197-0.038-0.197-0.245-0.245-0.678c-0.066-0.595-0.258-2.594-0.166-3.946c0.06-0.88,0.367-2.371,0.367-2.371l2.225-9.108c-1.368-2.807-0.246-7.192,2.871-7.192c2.211,0,2.79,2.001,2.113,4.406c-0.301,1.073-1.246,4.082-1.275,4.224c-0.029,0.142-0.099,0.442-0.083,0.738c0,0.878,0.671,2.672,2.995,2.672c3.744,0,5.517-5.535,5.517-9.237c0-2.977-1.892-6.573-7.416-6.573c-5.628,0-8.732,4.283-8.732,8.214c0,2.205,0.87,3.091,1.273,3.577c0.328,0.395,0.162,0.774,0.162,0.774l-0.355,1.425c-0.131,0.471-0.552,0.713-1.143,0.368C15.824,27.948,13,26.752,13,21.649C13,16.42,17.926,11,25.571,11C31.64,11,37,14.817,37,21.001C37,28.635,32.232,32.719,27.542,32.719z" />
                        </svg>
                    </button>
                    <button className="social-icon in">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M8 3C5.239 3 3 5.239 3 8L3 16C3 18.761 5.239 21 8 21L16 21C18.761 21 21 18.761 21 16L21 8C21 5.239 18.761 3 16 3L8 3 z M 8 5L16 5C17.668 5 19 6.332 19 8L19 16C19 17.668 17.668 19 16 19L8 19C6.332 19 5 17.668 5 16L5 8C5 6.332 6.332 5 8 5 z M 12 7.5C10.62 7.5 9.5 8.62 9.5 10C9.5 11.38 10.62 12.5 12 12.5C13.38 12.5 14.5 11.38 14.5 10C14.5 8.62 13.38 7.5 12 7.5 z M 7.5 15.5L16.5 15.5C16.776 15.5 17 15.724 17 16C17 16.276 16.776 16.5 16.5 16.5L7.5 16.5C7.224 16.5 7 16.276 7 16C7 15.724 7.224 15.5 7.5 15.5 z" />
                        </svg>
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Login;


