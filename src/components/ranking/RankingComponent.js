import React from "react";
import { List, ListItem, ListItemText} from "@material-ui/core";
import {FcGraduationCap, FcUpLeft} from "react-icons/fc";
import {Link} from 'react-router-dom'

const RankingComponent = (props) => {

    return (

        <div className="home ranking-container">

            <h1 className="h1-background">Top 10 najlepszych użytkowników</h1>
            <Link style={{color: 'black'}}to='/home'> <span><FcUpLeft/></span>Powrót do strony głównej </Link>
            <List className="list-ranking">
                {props.students.map((student) => (
                    <ListItem
                        key={student.id}
                    >
                        <ListItemText className="list-icon3" primary={` ${student.username}`}/>
                        <ListItemText className="list-icon2" primary={` ${student.points}`}/>
                        <ListItemText className="list-icon">
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default RankingComponent