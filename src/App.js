import './App.css';
import LoginUserContainer from "./components/login/LoginUserContainer";
import React, {useState} from "react";
import {setRef} from "@mui/material";
import {AuthContext} from "./context/auth";
import {SnackbarProvider} from 'notistack';
// import HomePageContainer from "./components/home/HomePageContainer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RegisterContainer from "./components/register/RegisterContainer";
import LoginUserComponent from "./components/login/LoginUserComponent";
import FooterContainer from "./components/footer/FooterContainer";
import AppBarContainer from "./components/topApp/AppBarContainer";
import {ModalFooter} from "react-bootstrap";
import HomePageContainer from "./components/home/HomePageContainer";
import PrivateRoute from './PrivateRoute';
import RankingContainer from "./components/ranking/RankingContainer";
import Task from "./components/Task";

import etc from "./components/etc";
import ProgressResultContainer from "./components/progressResults/ProgressResultContainer";
import DataFromDB from "./dataFromDB";

function App() {
    const existingToken = localStorage.getItem("token")
    const [authToken, setAuthToken] = useState(existingToken)

    const setToken = (data) => {
        if (data === "")
            localStorage.removeItem("token")
        else
            localStorage.setItem("token", data)
        setAuthToken(data)
    }

    return (
        <>
            {/*<SnackbarProvider maxSnack={5}>*/}
            {/*<AuthContext.Provider value={{authToken, setAuthToken: setToken}}>*/}
            {/*<AppBarContainer/>*/}
            <Router>
                <div className="container-fluid pd-0 mg-0">
                    <Route path="/" exact component={LoginUserContainer}/>
                    <Route path="/register" component={RegisterContainer}/>
                    <Route path="/etc" component={etc}/>
                    <Route exact path="/home" component={HomePageContainer}/>
                    <Route exact path="/ranking" component={RankingContainer}/>
                    <Route exact path="/pro" component={ProgressResultContainer}/>
                    <Route exact path="/task" component={Task}/>
                    <Route exact path="/taskForId" component={DataFromDB}/>
                    {/*<PrivateRoute exact path="/home" component={HomePageContainer}/>*/}
                    {/*<PrivateRoute exact path="/ranking" component={RankingContainer} />*/}
                    {/*<PrivateRoute exact path="/pro" component={ProgressResultContainer} />*/}
                    {/*<PrivateRoute exact path="/task" component={Task} />*/}
                    {/*<PrivateRoute exact path="/taskForId" component={DataFromDB} />*/}
                </div>
                {/*<FooterContainer/>*/}
            </Router>
            {/*</AuthContext.Provider>*/}
            {/*</SnackbarProvider>*/}
        </>
    );


}

export default App;
