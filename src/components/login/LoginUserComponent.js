import {Button, Paper} from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'

const paperStyle = {padding: '50px 20px', width: 600, margin: "20px auto"}
const buttonStyle = {margin: "0 20px"}

const FormComponent = (props) => {
    return (
        <div className="form-container body-color">
            <form className="center-form" onSubmit={props.handleSubmit} method="POST">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/slon.png" alt="App Logo"/>
                </div>
                <Paper elevation={3} style={paperStyle}>

                    <div>
                        <h1>Wroć do gry</h1>
                    </div>

                    <div>
                        <div className="margin-3">
                            <span><i className="fas fa-user"/></span>
                            <TextField label="Login" color="success" variant="outlined"
                                       type="username"
                                       id="inputUsername"
                                       name="username"
                                       placeholder="Login"
                                       required
                                       onChange={e => props.setUsername(e.target.value)}
                                       value={props.username}/>
                        </div>
                    </div>

                    <div>

                        <div className="margin-3">
                            <span><i className="fas fa-lock"/></span>
                            <TextField label="Hasło" color="success" variant="outlined"
                                       type="password"
                                       id="inputPassword"
                                       name="password"
                                       placeholder="Hasło"
                                       required
                                       minLength={4}
                                       onChange={e => props.setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-error" style={(props.credentialsError) ? {display: "block"} : {}}>
                        Niepoprawne dane logowania
                    </div>

                    <button className="btn-1">
                        Zaloguj się
                    </button>

                    <div>
                        <Link to="/register">Chcesz się zarejestrować?</Link>
                    </div>

                </Paper>


            </form>

        </div>
    )
}

export default FormComponent