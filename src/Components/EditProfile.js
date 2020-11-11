import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../utils/Context";

const EditProfile = () => {
    const data = useContext(UserContext);
    return (
        <div>
            <p>first name:<input value={data.firstName}
                                      type="text"
                                      placeholder=""/></p>
            <p>last name:<input value={data.lastName}/></p>
            <Link to ={'/profile'}><button>Save</button></Link>
        </div>
    );
};

export default EditProfile;