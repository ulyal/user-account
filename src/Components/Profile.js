import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../utils/Context";

const Profile = (props) => {
    const value = useContext(UserContext);
    return (
        <div>

            <p>First name:  </p>
            <p>Last name: </p>
            <Link to ={'/editProfile'}><button>Edit profile</button></Link>
            <Link to ={'/changePassword'}><button>Change password</button></Link>
            <Link to ={'/home'}><button>Logout</button></Link>
        </div>
    );
};

export default Profile;