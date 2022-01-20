import React, {useEffect, useState} from "react";
import {Paper, TextField} from "@material-ui/core";
import word from "./word";
import {Grid, IconButton, Typography} from "@mui/material";

const paperStyle = {padding: '50px 10px', width: '300px', margin: "60px auto"}
const textFieldStyle = {fontsize: '30px'}
const wordButtonStyle= {border:'1px solid #dddddd', borderRadius:'10%', padding: "5px 15px", margin:'10px'}

const signs = ['ó', 'u', 'h','ch','ż','rz']

const Gap = (props) => {

    const signButtonClick = (sign) =>{
        if(sign === word.answer){
            word.points = word.points + 1
            word.correct = word.correct + 1
            props.resetPlayer()
        }else {
            word.points = word.points - 1
            word.wrong = word.wrong + 1
        }
    }

    const getSignButton = () =>{
        return signs.map((sign, index)=>(
            <Grid item key={index} xs={4}>
                <IconButton style={wordButtonStyle} onClick={()=>signButtonClick(sign)}>
                    <Typography>{sign}</Typography>
                </IconButton>
            </Grid>
        ))
    }

    // console.log(props.callback)
    return (
        <div>
            {/*<form onSubmit={props.handleSubmit}>*/}
            <Paper elevation={3} style={paperStyle}>
                <h3>Wpisz w lukę odpowiednią literę</h3>
                <div className="answer-form">
                    <Grid container>
                        {getSignButton()}
                    </Grid>

                </div>
            </Paper>
            {/*</form>*/}
        </div>
    )

}

export default Gap;
