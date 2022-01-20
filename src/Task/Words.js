import React, {useEffect, useState} from "react";
import {useAuth} from "../context/auth";
import jwt from "jwt-decode";
import tetroTest from "../tetrominos";


const Words = (props) => {
    const [students, setStudents] = useState([])
    const {authToken, setAuthToken} = useAuth()
    var decodedToken = ""

    try {
        decodedToken = jwt(authToken)
    } catch (exception) {
        setAuthToken("")
    }

    useEffect(() => {
        fetch("http://localhost:8080/answers/1", {
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
                    setStudents(data)
                }
            })
            .catch(error => {
                console.log("error")
            })
    }, [authToken, setAuthToken])

    return<tetroTest
        students = {students}
        />


}
export default Words