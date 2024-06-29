import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LayOut } from './Components/LayOut'
import {Notes} from './Pages/Notes'
import { Login } from './Pages/Login'
import { SignUp } from './Pages/SignUp'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {teal, purple} from '@mui/material/colors'
import { Todo } from './Pages/Todo'

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: purple[500]
    },
  }
})

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<LayOut />}>
            <Route path='/' element={<Notes />} />
            <Route path='/todo' element={<Todo />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/sign' element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App