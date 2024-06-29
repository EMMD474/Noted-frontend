import { Box, Container, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CreateTodo } from '../Components/CreateTodo'
import { CenterFocusStrong } from '@mui/icons-material'

export const Todo = () => {
    const [todos, setTodos] = useState([])
    const getTodos = async() => {
        try {
            const res = await fetch('http://127.0.0.1:5000/todos')
            if (!res.ok) {
                throw new Error("Netowrk response was not ok!")
            }
            const data = await res.json()
            setTodos(data)

        } catch (err) {
            console.log("Error in fetching data!", err)
        }
        
    }
    console.log(todos)

    useEffect(() => {
        getTodos()
    }, [])
  return (
    <Box sx={{
        width: '100%',
         display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
          }}>
        <Typography variant='h5' gutterBottom color="primary">
            Todos
        </Typography>
        <Divider sx={{width: "20em"}} />
        {todos.length === 0? (
            <Typography variant='body2' color="InfoText">
                No Todos To Display!
            </Typography>
        ):
        <Container sx={{
            width: '100%',
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            }}  >
           {todos.map(todo => (
            <CreateTodo 
            key={todo['_id']} 
            name={todo['todo']} 
            importance={todo['importance']} 
            created_at={todo['created_at']} 
            checked={todo['checked']} />
           ))}
        </Container>}
    </Box>
  )
}
