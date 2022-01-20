import React, {useEffect, useState} from "react";
import {useAuth} from "../../context/auth";
import {Redirect} from "react-router-dom";
import LoginUserComponent from "./LoginUserComponent";
import axios from 'axios'
import word from "../game/word";

const LoginUserContainer = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [credentialsError, setCredentialsError] = useState()
    const {authToken, setAuthToken} = useAuth();

    useEffect(() => {
        document.title = "Zaloguj się"
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch("https://guarded-wave-45922.herokuapp.com/api/auth/login", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => {
                setCredentialsError(false)

                if (response.ok) {
                    return response.json()
                    console.log("ok");
                }
                else if (response.status === 401) {
                    setCredentialsError(true)
                    console.log(credentialsError);
                }
                else {
                    throw Error("Error occured.")
                }
            })
            .then(data => {
                if (data) {
                    setAuthToken(data.access_token)
                    word.token = data.access_token
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    if(authToken) {
        return <Redirect to="/home" />
    }


    return <LoginUserComponent
        username={username}
        password={password}
        credentialsError={credentialsError}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
    />

}


export default LoginUserContainer
