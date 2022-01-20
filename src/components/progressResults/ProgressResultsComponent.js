import React from "react";
import {Paper} from "@mui/material";
import {FcUpLeft} from "react-icons/fc";
import {Link} from "react-router-dom";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {ListOutlined} from "@mui/icons-material";


const paperStyle = {padding: '50px 10px', width: '500px', margin: "60px auto"}
const ProgressResultsComponent = (props) => {

    return (
        <div className="home ranking-container">
            <h1 className="h1-background"> Moje wyniki</h1>
            <Link style={{color: 'black'}}to='/home'> <span><FcUpLeft/></span>Powrót do strony głównej </Link>
            <Paper style={paperStyle} elevation={3}>
                <List className="list-ranking">
                    <ListItem
                        key={props.loggedStudent?.id}>
                        <ListItemText className="list-icon3" primary="Liczba punktów:"/>
                        <ListItemText className="list-icon2" primary={` ${props.loggedStudent?.points}`}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText className="list-list" primary="Opanowanie słówek (w %):"/>
                        <ListItemText/>
                        <ListItemText className="list-html" >
                        </ListItemText>
                    </ListItem>

                </List>
            </Paper>



        </div>
    )

}

export default ProgressResultsComponent;

// <p>{props.loggedStudent?.points}</p>