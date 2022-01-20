import React from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";

const TaskComponent = (props) => {


    return(
        <div>
            <List className="list-ranking">
                {props.polishTask.map((task) => (
                    <ListItem
                        key={task.id}
                    >
                        <ListItemText className="list-icon3" primary={` ${task.word}`}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )

}

export default TaskComponent

