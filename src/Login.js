import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';

import './Login.css';

function Login(){
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithEmailAndPassword("demo@example.com", "password").then((res) => {
            dispatch(login({
                displayName: "demo",
                email: "demo@example.com",
                photoUrl: "gs://clone-d83bd.appspot.com/avatar-1300331_640.png"
            })) 
        }).catch((err) => {
            alert(err.message);
        })
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="gmail logo" />
                <Button variant="contained" color="primary" onClick={signIn}>Try Demo</Button>
            </div>
        </div>
    )
}

export default Login;