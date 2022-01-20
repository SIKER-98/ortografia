import * as React from 'react';
import { Container, Paper, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export default function Student() {

const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto"}
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [points, setPoints] = useState('')
const [students, setStudents] = useState([])


const handleClick = (e) => {
    e.preventDefault()
    const student = { username, password, points }
    console.log(student)
    fetch("http://localhost:8080/api/students/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    }).then(() => {
        console.log("new student added")
    });
}

useEffect(() => {
    fetch("http://localhost:8080/api/students/all")
        .then(res => res.json())
        .then((result) => {
            setStudents(result);
            console.log("dodano" + result)
        })
}, [])

return (
    <Container>
        <Paper elevation={3} style ={paperStyle}>
        <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" label="Student UserName" variant="outlined" fullWidth
                        value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField id="outlined-basic1" label="Student password" variant="outlined" fullWidth
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                      <TextField id="outlined-basic2" label="Student Points" variant="outlined" fullWidth
                        value={points} onChange={(e) => setPoints(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}  >
                        Submit
                    </Button>
                </Box>

        </Paper>

        <h1>Students</h1>
              <Paper elevation={3} style={paperStyle}>

                {students.map(student => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
                        Id:{student.id}<br />
                        Name:{student.username}<br />
                        Address:{student.points}

                    </Paper>
                ))
                }

            </Paper>
    </Container>
)


}