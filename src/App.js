import React, {useState} from 'react';
import Main from "./Components/Main";
import {UserContext} from "./utils/Context";

const App = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        login: "",
        password: ""
    });

    const setProfile = (newFirstName, newLastName, newLogin, newPassword) => {
        setUser({
            firstName: newFirstName,
            lastName: newLastName,
            login: newLogin,
            password: newPassword
        });
    };

    const changeProfile = (newFirstName, newLastName) => {
        setUser({
            ...user,
            firstName: newFirstName,
            lastName: newLastName,
        });
    };

    const changePassword = (newPassword) => {
        setUser({
            ...user,
            password: newPassword
        });
    };

    const cleanProfile = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, changeProfile, changePassword, cleanProfile, setProfile}}>
            <Main/>
        </UserContext.Provider>
    );
}

export default App;
