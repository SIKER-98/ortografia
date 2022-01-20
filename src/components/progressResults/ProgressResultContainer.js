import React, {useEffect, useState} from "react";
import {useAuth} from "../../context/auth";
import jwt from "jwt-decode";
import ProgressResultsComponent from "./ProgressResultsComponent";

const ProgressResultContainer = (props) => {

    const [loggedStudent, setLoggedStudent, loggedStudentId, setLoggedStudentId] = useState()
    const {authToken, setAuthToken} = useAuth()
    var decodedToken = ""

    try {
        decodedToken = jwt(authToken)
    } catch (exception) {
        setAuthToken("")
    }

    useEffect(() => {
        fetch("http://localhost:8080/api/students/getStudent", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + authToken
            }
        })
            .then(response => {
                if(response.ok) {
                    console.log("Cosleoddsdf:" +response.id)
                    console.log("siemamiazga")

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
                    console.log("tuuuuu jestem")
                    localStorage.setItem("student",data.id)
                    setLoggedStudent(data)
                    setLoggedStudentId(data.id)

                }
            })
            .catch(error => {
                console.log("error")
            })
    }, [authToken, setAuthToken])


    console.log("student" + loggedStudent)

    return<ProgressResultsComponent
            loggedStudent = {loggedStudent}
            loggedStudentId = {loggedStudentId}
        />


}

export default ProgressResultContainer;