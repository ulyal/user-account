import React, {useState} from 'react';
import Login from "./Login";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div>
            <Link to ={'/register'}><button>Register</button></Link>
            <Link to={'login'}><button>Login</button></Link>
        </div>
    );
}
export default Home;