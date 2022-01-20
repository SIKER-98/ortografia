import React, {useEffect, useState} from "react";
import {useAuth} from "./context/auth";
import loggedId from "./constants";
import RankingComponent from "./components/ranking/RankingComponent";
import TaskComponent from "./TaskComponent";
import DataBConponent from "./DataBConponent";

const DataFromDB = () => {
    const [polishTask, setPolishTask] = useState([])
    const {authToken, setAuthToken} = useAuth()

    console.log(loggedId);

    useEffect(() => {
        fetch("http://localhost:8080/answers/getAll/" + loggedId , {
            method: 'GET',
            mode: "cors",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + authToken
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()

                } else if (response.status === 401) {
                    setAuthToken()
                } else {
                    throw Error("Napotkano błąd")
                }
            })
            .then(data => {
                if (data) {
                    setPolishTask(data)
                }
            })
            .catch(error => {
                console.log("error")
            })
    }, [authToken, setAuthToken])

    return<DataBConponent
    polishTask = {polishTask}
    />


}
export default DataFromDB

