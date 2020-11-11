import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../utils/Context";

const ChangePassword = () => {
    const value = useContext(UserContext);
    const [password, setPassword] = useState('');
    return (
        <div>
            <p>new password:<input
                value={password}
                onChange={event => setPassword(event.target.value)}
                type = 'text'/></p>
            <Link to ={'/profile'}><button>Save</button></Link>
        </div>
    );
};

export default ChangePassword;