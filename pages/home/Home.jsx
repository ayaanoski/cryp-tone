import React from 'react';
import './home.css';
import video from './ceiling.mp4';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const tologin = () => {
        navigate("/login")


    }
    return (
        <div className="video-container home">
            <video autoPlay muted loop id="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>WELCOME TO MUSIC NFT MARKET</h1>
                <button onClick={tologin} className="Loginbutton">Login</button>
            </div>
        </div>
    );
}

export default Home;















// const Home = () => {
//     return (
//         <div className="video-container home">
//             <video autoPlay muted loop id="background-video">
//                 <source src={video} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="content">
//                 helloworld
//             </div>
//         </div>
//     )
// }

// export default Home;
