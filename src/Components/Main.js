import {Route,Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import React from "react";


const Main = props => {
    return (
        <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/login'} exact component={Login}/>
            <Route path={'/register'} exact component={Register}/>
            <Route path={'/profile'} exact component={Profile}/>
            <Route path={'/editProfile'} exact component={EditProfile}/>
            <Route path={'/changePassword'} exact component={ChangePassword}/>
            <Route component={Home}/>
        </Switch>
    );

};

export default Main;