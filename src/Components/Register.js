import React, {useContext, useState} from 'react';
import {UserContext} from "../utils/Context";


const Register = () => {
    const context = useContext(UserContext);
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        login: "",
        password: ""
    });

    const onChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    return (
    <div>
        <label>Login:
            <input type="text" onChange={onChange} name="login" value={state.login}/>
        </label><br/>
        <label>Password:
            <input type="text" onChange={onChange} name="password" value={state.password}/>
        </label><br/>
        <label>First name:
            <input type="text" onChange={onChange} name="firstName" value={state.firstName}/>
        </label><br/>
        <label>Last name:
            <input type="text" onChange={onChange} name="lastName" value={state.lastName}/>
        </label><br/>
        <button onClick={() => {
            fetch('https://webaccounting.herokuapp.com/account/user',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(state)
                }).then(response => {
                    if(response.status === 200){

                    }
            })
        }}>Register
        </button>
    </div>
)
    ;
};

export default Register;

