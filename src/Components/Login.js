import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../utils/Context";
const Login = props => {

    const [login,setLogin] = useState('');

    return (
        <div>
        <p>login:<input
        value={login}
        onChange={event => setLogin(event.target.value)}
        type='text'
        placeholder=''/></p>
        <p>password:<input/></p>
            <Link to ={'/profile'}><button>Login</button></Link>
        </div>
    );
};

export default Login;