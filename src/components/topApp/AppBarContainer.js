import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {TableFooter} from "@mui/material";

const toolbarStyle = {position: "bottom"}

export default function AppBarContainer() {
    return (
        <AppBar position="absolute">
            <Toolbar className="toolbar-style">
                <Typography variant="h8" component="div" sx={{flexGrow: 1}}>
                    Aplikacja do pracy dyplomowej, stworzona przez studentkę Wojskowej Akademii Technicznej, Weronikę
                    Łyszczewską
                </Typography>
            </Toolbar>
        </AppBar>
    );
}