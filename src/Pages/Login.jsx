import { Box, Container } from '@mui/material'
import React from 'react'
import { Form } from '../Components/Form'
import { Directions } from '@mui/icons-material'

export const Login = () => {
  return (
    <Container sx={{
      display: "flex",
      alignItems: 'center',
      justifyContent: "center",
    }}>
      <Form />
    </Container>
  )
}
