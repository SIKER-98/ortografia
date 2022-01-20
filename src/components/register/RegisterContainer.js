import React, {useState, useEffect} from "react";
import RegisterComponent from './RegisterComponent'
import {useAuth} from "../../context/auth";
import {SnackbarProvider, useSnackbar, withSnackbar} from "notistack";
import {Redirect} from "react-router-dom";
import {Slide} from "@material-ui/core";
import {wait} from "@testing-library/react";



const RegisterContainer = () => {
    const [username, setUsername] =useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState()
    // const [passwordError, setPasswordError] = useState()
    const { enqueueSnackbar } = useSnackbar();
    const {authToken} = useAuth();



    useEffect(() => {
        document.title = "Zarejestruj się"
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        setUsernameError(false)

        // fetch("http://localhost:8080/api/auth/create", {
        fetch("https://guarded-wave-45922.herokuapp.com/auth/create", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => {
                setUsernameError(false)

                if(response.ok) {
                    enqueueSnackbar("Gratulacje! Teraz możesz przejść do okna logowania", {
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                        variant: 'info',
                        preventDuplicate: true,
                        autoHideDuration: 7000,
                        TransitionComponent: Slide,
                    })
                    setUsername("")
                }
                else if(response.status === 409) {
                    enqueueSnackbar("Konto o podanym loginie już istnieje", {
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                        variant: 'warning',
                        preventDuplicate: true,
                        autoHideDuration: 4000,
                        TransitionComponent: Slide,
                    })
                }
                else {
                    throw Error("Napotkano błąd" + response.status)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }


    if(authToken) {
        return <Redirect to="/home" />
    }

    return (
        <RegisterComponent
        username = {username}
        password = {password}
        setUsername = {setUsername}
        setPassword = {setPassword}
        usernameError = {usernameError}
        // passwordError = {passwordError}
        handleSubmit = {handleSubmit}

/>)
}

export default withSnackbar(RegisterContainer)
