import React, {useEffect, useState} from "react";
import {useAuth} from "../context/auth";
import jwt from "jwt-decode";
import Cell from "./game/Cell";
import RankingComponent from "./ranking/RankingComponent";
import TaskComponent from "../TaskComponent";

const Task = () => {

    const [task, setTask] = useState([])
    const {authToken, setAuthToken} = useAuth()
    var decodedToken = ""
    const [color] = '0, 0, 0'

    try {
        decodedToken = jwt(authToken)
    } catch (exception) {
        setAuthToken("")
    }


    useEffect(() => {
        fetch("http://localhost:8080/answers/getAnswers", {
            method: 'GET',
            mode: "cors",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + authToken
            }
        })
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                else if(response.status === 401) {
                    setAuthToken()
                }
                else {
                    throw Error("Napotkano błąd")
                }
            })
            .then(data => {
                if(data) {
                    setTask(data)
                }
            })
            .catch(error => {
                console.log("error")
            })
    }, [authToken, setAuthToken])


}

export default Task